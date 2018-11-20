import React, { Component } from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import values from 'lodash/values';
import ModalFrame from 'containers/ModalFrameContainer';
import DropdownSelect from 'components/DropdownSelect';
import Price from 'components/Price';
import QuantitySelect from 'components/QuantitySelect';
import Button from 'components/Button';
import { Section, CheckboxSelect, RadioSelect } from 'components/FormSelect';
import messages from './messages';
import {
  containerStyle,
  headerStyle,
  Content,
  Footer,
  FooterLeftSide,
  FooterRightSide,
  LeftSidePrice,
  RightSidePrice,
  btn,
} from './StyledComponents';

class MealOptions extends Component {
  constructor(props) {
    super(props);

    const { purchase } = props;
    const { parentProduct, product } = purchase;
    const state = this.generateState(purchase);
    let dropdown;
    let selectedMenuItem;

    if (parentProduct) {
      dropdown = { items: parentProduct.menuitems };
      selectedMenuItem = dropdown.items.find(({ id }) => id === product.id);
    }

    this.state = {
      ...state,
      dropdown,
      selectedMenuItem,
    };
  }

  generateState = purchase => {
    const { product, price } = purchase;
    const radios = purchase.radios || {};
    const checkboxes = purchase.checkboxes || {};
    const quantity = purchase.quantity || 1;
    const additions = purchase.checkboxAdditions || [];

    if (!purchase.radios && !purchase.checkboxes) {
      product.modifier_groups.forEach(group => {
        if (!group.modifiers.length) return;

        const { min_option: min, max_option: max } = group;

        if (min === 1 && max === 1) {
          radios[group.id] = {
            ...group,
            value: group.modifiers[0] && group.modifiers[0].id,
          };
        } else {
          let hint = 'select';
          if (min > 0 && max > 1) hint = 'selectMin';
          if (min === 0 && max > 0) hint = 'selectMax';

          checkboxes[group.id] = { ...group, checked: {}, min, max, hint };
        }
      });
    }

    return {
      radios,
      checkboxes,
      quantity,
      additions,
      price:
        price !== undefined
          ? price
          : this.calculatePrice(quantity, additions, radios, product),
    };
  };

  calculatePrice = (quantity, additions, radios, product) => {
    const { purchase } = this.props;
    const { selectedMenuItem } = this.state || {};
    const { price } = product || selectedMenuItem || purchase.product;
    let additionsPrice = additions.reduce((sum, { price }) => sum + price, 0);
    additionsPrice += values(radios).reduce((sum, { value, modifiers }) => {
      if (!value) return sum;

      const modifier = modifiers.find(({ id }) => id === value);

      return sum + modifier.price;
    }, 0);

    return (price + additionsPrice) * quantity;
  };

  handleDropdownSelect = selectedMenuItem => {
    const state = this.generateState({ product: selectedMenuItem });
    this.setState({ ...state, selectedMenuItem });
  };

  handleRadioSelect = (modifierGroupId, modifier) => {
    const { quantity, radios, additions } = this.state;
    const group = radios[modifierGroupId];
    radios[modifierGroupId] = { ...group, value: modifier.id };
    const price = this.calculatePrice(quantity, additions, radios);

    this.setState({ radios, price });
  };

  handleCheckboxSelect = (modifierGroupId, modifier) => {
    const { quantity, additions: oldAdditns, checkboxes, radios } = this.state;
    const { checked } = checkboxes[modifierGroupId];
    checked[modifier.id] = !checked[modifier.id];
    const additions = checked[modifier.id]
      ? oldAdditns.concat(modifier)
      : oldAdditns.filter(({ id }) => id !== modifier.id);
    const price = this.calculatePrice(quantity, additions, radios);

    this.setState({ checkboxes, additions, price });
  };

  handleQuantityChange = quantity => {
    if (quantity < 1) return;

    const { additions, radios } = this.state;
    const price = this.calculatePrice(quantity, additions, radios);

    this.setState({ quantity, price });
  };

  handleAddToCart = () => {
    const { purchase, onSubmit } = this.props;
    const {
      quantity,
      additions,
      price,
      radios,
      checkboxes,
      selectedMenuItem,
    } = this.state;
    const radioAdditions = values(radios)
      .filter(({ value }) => value)
      .map(({ modifiers, value }) => modifiers.find(({ id }) => id === value));
    const totalAdditions = additions.concat(radioAdditions);

    onSubmit({
      id: purchase.id,
      product: selectedMenuItem || purchase.product,
      parentProduct: purchase.parentProduct,
      quantity,
      additions: totalAdditions,
      price,
      radios,
      checkboxes,
      checkboxAdditions: additions,
    });
  };

  render() {
    const { product, parentProduct } = this.props.purchase;
    const { quantity, price, radios, checkboxes, dropdown } = this.state;
    const { name, description } = parentProduct || product;

    return (
      <ModalFrame
        title={name}
        subtitle={description}
        css={containerStyle}
        headerCss={headerStyle}
      >
        <Content isWithDropdown={!!dropdown}>
          {dropdown ? (
            <Section title={intl.formatMessage(messages.selectOne)}>
              <DropdownSelect
                items={dropdown.items}
                selectedItem={this.state.selectedMenuItem}
                onItemSelect={this.handleDropdownSelect}
                itemKey="id"
                itemValue="name"
                isBlock
              />
            </Section>
          ) : null}
          {values(checkboxes).map(
            ({ id, name, min, max, hint, modifiers, checked }) => (
              <Section
                key={id}
                title={name}
                hint={intl.formatMessage(messages[hint], { min, max })}
                isCollapsible
              >
                <CheckboxSelect
                  name={id}
                  max={max}
                  options={modifiers}
                  checkedOptions={checked}
                  onChange={this.handleCheckboxSelect}
                />
              </Section>
            ),
          )}
          {values(radios).map(({ id, name, modifiers, value }) => (
            <Section
              key={id}
              title={name}
              hint={intl.formatMessage(messages.required)}
              isCollapsible
            >
              <RadioSelect
                name={id}
                options={modifiers}
                value={value}
                onChange={this.handleRadioSelect}
              />
            </Section>
          ))}
        </Content>
        <Footer>
          <FooterLeftSide>
            <QuantitySelect
              quantity={quantity}
              onChange={this.handleQuantityChange}
            />
            <LeftSidePrice>
              &nbsp; &nbsp; &nbsp;
              {intl.formatMessage(messages.total)} &nbsp;
              <Price
                price={price}
                size={20}
                currencyStyle={{ fontSize: 16 }}
                isPrimary
              />
            </LeftSidePrice>
          </FooterLeftSide>
          <FooterRightSide>
            <RightSidePrice>
              {intl.formatMessage(messages.total)} &nbsp;
              <Price
                price={price}
                size={20}
                currencyStyle={{ fontSize: 16 }}
                isPrimary
              />
              &nbsp; &nbsp; &nbsp;
            </RightSidePrice>
            <Button
              primary
              inline
              css={btn}
              size="l"
              onClick={this.handleAddToCart}
            >
              {intl.formatMessage(messages.addTocart)}
            </Button>
          </FooterRightSide>
        </Footer>
      </ModalFrame>
    );
  }
}

MealOptions.propTypes = {
  purchase: PropTypes.shape({
    product: PropTypes.object.isRequired,
    parentProduct: PropTypes.object,
    radios: PropTypes.object,
    checkboxes: PropTypes.object,
    checkboxAdditions: PropTypes.array,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MealOptions;

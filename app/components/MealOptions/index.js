import React, { Component } from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import values from 'lodash/values';
import ModalFrame from 'containers/ModalFrameContainer';
// import DropdownSelect from 'components/DropdownSelect';
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
  FooterRightSide,
} from './StyledComponents';

class MealOptions extends Component {
  constructor(props) {
    super(props);

    const { purchase } = props;
    const { product, price } = purchase;
    const radios = purchase.radios || {};
    const checkboxes = purchase.checkboxes || {};

    if (!purchase.radios && !purchase.checkboxes) {
      product.modifierGroups.forEach(group => {
        if (group.min === 1 && group.max === 1) {
          radios[group.id] = {
            ...group,
            value: group.modifiers[0] && group.modifiers[0].id,
          };
        } else {
          checkboxes[group.id] = {
            ...group,
            checked: {},
            max: group.max,
            hint: group.min === 1 ? 'required' : 'select',
          };
        }
      });
    }

    const quantity = purchase.quantity || 1;
    const additions = purchase.checkboxAdditions || [];
    this.state = {
      radios,
      checkboxes,
      quantity,
      additions,
      price:
        price !== undefined
          ? price
          : this.calculatePrice(quantity, additions, radios),
    };
  }

  calculatePrice = (quantity, additions, radios) => {
    let additionsPrice = additions.reduce((sum, { price }) => sum + price, 0);
    additionsPrice += values(radios).reduce((sum, { value, modifiers }) => {
      if (!value) return sum;

      const modifier = modifiers.find(({ id }) => id === value);

      return sum + modifier.price;
    }, 0);

    return (this.props.purchase.product.price + additionsPrice) * quantity;
  };

  // handleDropdownSelect = (name, value) => {
  //   this.setState(state => ({
  //     dropdowns: { ...state.dropdowns, [name]: value },
  //   }));
  // };

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
    const { quantity, additions, price, radios, checkboxes } = this.state;
    const radioAdditions = values(radios)
      .filter(({ value }) => value)
      .map(({ modifiers, value }) => modifiers.find(({ id }) => id === value));
    const totalAdditions = additions.concat(radioAdditions);

    onSubmit({
      id: purchase.id,
      product: purchase.product,
      quantity,
      additions: totalAdditions,
      price,
      radios,
      checkboxes,
      checkboxAdditions: additions,
    });
  };

  render() {
    const { product } = this.props.purchase;
    const { quantity, price, radios, checkboxes } = this.state;

    return (
      <ModalFrame
        title={product.name}
        subtitle={product.description}
        isMobileFullscreen
        css={containerStyle}
        headerCss={headerStyle}
      >
        <Content>
          {/* {dropdowns.map(({ id, name, hint }) => (
            <Section key={id} title={name} hint={hint} isCollapsible>
              <DropdownSelect items={dropdownItems} isBlock />
            </Section>
          ))} */}
          {values(checkboxes).map(
            ({ id, name, max, hint, modifiers, checked }) => (
              <Section
                key={id}
                title={name}
                hint={intl.formatMessage(messages[hint])}
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
          <QuantitySelect
            quantity={quantity}
            onChange={this.handleQuantityChange}
          />
          <FooterRightSide>
            {intl.formatMessage(messages.total)} &nbsp;
            <Price price={price} isPrimary />
            &nbsp; &nbsp; &nbsp;
            <Button primary inline size="l" onClick={this.handleAddToCart}>
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
    radios: PropTypes.object,
    checkboxes: PropTypes.object,
    checkboxAdditions: PropTypes.array,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MealOptions;

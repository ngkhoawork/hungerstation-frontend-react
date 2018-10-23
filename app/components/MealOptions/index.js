import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import intl from 'utils/intlService';
import DropdownSelect from 'components/DropdownSelect';
import Price from 'components/Price';
import QuantitySelect from 'components/QuantitySelect';
import Button from 'components/Button';
import CircledItem from 'components/CircledItem';
import { Section, CheckboxSelect, RadioSelect } from 'components/FormSelect';
import { gold } from 'utils/css/colors';
// import messages from './messages';
import {
  Container,
  Header,
  Title,
  Description,
  CloseBtnStyle,
  Content,
  Footer,
  FooterRightSide,
} from './StyledComponents';

class MealOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // dropdowns: {},
      // radios: {},
      checkboxes: {},
    };
  }

  handleDropdownSelect = (name, value) => {
    this.setState(state => ({
      dropdowns: { ...state.dropdowns, [name]: value },
    }));
  };

  handleRadioSelect = (name, value) => {
    this.setState(state => ({
      radios: { ...state.radios, [name]: value },
    }));
  };

  handleCheckboxSelect = (name, option) => {
    const { checkboxes } = this.state;
    const { name: options } = checkboxes;
    const changedIndex = options.indexOf(option);
    const updatedOptions = options
      .slice(0, changedIndex)
      .concat({ ...option, isChecked: !option.isChecked })
      .concat(options.slice(changedIndex + 1));

    this.setState(state => ({
      checkboxes: {
        ...state.checkboxes,
        [name]: updatedOptions,
      },
    }));
  };

  render() {
    const { onCancel } = this.props;
    // const { dropdowns, radios, checkboxes } = this.state;
    const dropdowns = [{ name: 'Choose size', hint: 'Required' }];
    const radios = [
      { name: 'Basic ingredients', hint: 'Tap on item to exclude' },
    ];
    const checkboxes = [{ name: 'Type of bun', hint: 'Required' }];

    const dropdownItems = [
      { key: 1, value: 'prvi moji sledeci' },
      { key: 0, value: 'drugi' },
      { key: 3, value: 'treci' },
    ];

    const items = [
      { value: 1, label: 'prvi moji sledeci', isChecked: false },
      { value: 0, label: 'drugi', isChecked: true },
      { value: 3, label: 'treci' },
    ];

    return (
      <Container>
        <Header>
          <Title>Whooper</Title>
          <Description>
            A classic composition fo grilled blab blablabl abla bla lab blablabl
            abla bla lab blablabl abla bla lab blablabl abla bla
          </Description>
          <CircledItem
            color={gold}
            width={30}
            onClick={onCancel}
            style={CloseBtnStyle}
          >
            <span style={{ zIndex: 1, paddingTop: 2 }}>x</span>
          </CircledItem>
        </Header>
        <Content>
          {dropdowns.map(({ name, hint }) => (
            <Section key={name} title={name} hint={hint} isCollapsible>
              <DropdownSelect items={dropdownItems} isBlock />
            </Section>
          ))}
          {checkboxes.map(({ name, hint }) => (
            <Section key={name} title={name} hint={hint} isCollapsible>
              <CheckboxSelect
                name="Basic ingredients"
                options={items}
                onChange={(e, b) => console.log(e, b)}
              />
            </Section>
          ))}
          {radios.map(({ name, hint }) => (
            <Section key={name} title={name} hint={hint} isCollapsible>
              <RadioSelect
                name="Type of bun"
                options={items}
                value={0}
                onChange={(e, b) => console.log(e, b)}
              />
            </Section>
          ))}
        </Content>
        <Footer>
          <QuantitySelect quantity={1} onChange={console.log} />
          <FooterRightSide>
            Total &nbsp;
            <Price price={300} isPrimary />
            &nbsp; &nbsp; &nbsp;
            <Button primary inline size="lg" onClick={() => console.log('add')}>
              Add to cart
            </Button>
          </FooterRightSide>
        </Footer>
      </Container>
    );
  }
}

MealOptions.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default MealOptions;

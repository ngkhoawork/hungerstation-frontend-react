import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isChildOf } from 'utils/helpers';
import ChevronIcon from 'components/ChevronIcon';
import {
  Container,
  List,
  Item,
  SelectedItem,
  SelectedItemValue,
} from './StyledComponents';

class DropdownSelect extends Component {
  constructor(props) {
    super(props);

    this.id = `${Math.random()}`;
    this.state = { isOpen: false };

    if (!props.placeholder) {
      const { defaultSelectedItem, selectedItem, items } = props;
      this.state.selectedItem = defaultSelectedItem || selectedItem || items[0];
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClick);
  }

  getSelectedItemValue = () => {
    const { type, items, itemValue, placeholder, selectedItem } = this.props;
    const { selectedItem: stateSelectedItem } = this.state;

    if (type === 'button') return '';

    if (placeholder && !selectedItem && !stateSelectedItem) {
      return placeholder;
    }

    const selItem = selectedItem || stateSelectedItem || items[0];
    const selItemValue = itemValue ? selItem[itemValue] : selItem.value;

    return selItemValue !== undefined ? selItemValue : 'Select One';
  };

  handleToggle = () => this.setState(state => ({ isOpen: !state.isOpen }));

  handleClick = ({ target }) => {
    const { isOpen } = this.state;

    if (!isOpen) return;

    // close the dropdown on any click outside of it
    if (!isChildOf(target, this.id)) this.setState({ isOpen: false });
  };

  handleItemSelect = selItem => {
    const { type, selectedItem, onItemSelect } = this.props;

    this.setState({ isOpen: false });

    if (!selectedItem && type !== 'button') {
      this.setState({ selectedItem: selItem });
    }

    if (onItemSelect) onItemSelect(selItem);
  };

  renderListItem = item => {
    const { itemKey, itemValue, selectedItem } = this.props;
    const { selectedItem: stateSelectedItem } = this.state;
    const key = itemKey ? item[itemKey] : item.key;
    const value = itemValue ? item[itemValue] : item.value;
    const selItem = selectedItem || stateSelectedItem;
    const selectedItemKey = selItem && selItem[key];

    return (
      <Item
        key={key}
        onClick={() => this.handleItemSelect(item)}
        isSelected={selectedItemKey === key}
      >
        {value}
      </Item>
    );
  };

  render() {
    const { items, isBlock } = this.props;
    const { isOpen } = this.state;

    if (!items.length) return null;

    const selectedItemValue = this.getSelectedItemValue();

    return (
      <Container id={this.id}>
        <SelectedItem isBlock={isBlock} onClick={this.handleToggle}>
          {selectedItemValue === undefined ? null : (
            <SelectedItemValue>{selectedItemValue}</SelectedItemValue>
          )}
          <ChevronIcon isOpen={isOpen} />
        </SelectedItem>
        <List isBlock={isBlock} isOpen={isOpen}>
          {items.map(this.renderListItem)}
        </List>
      </Container>
    );
  }
}

DropdownSelect.propTypes = {
  placeholder: PropTypes.string,
  isBlock: PropTypes.bool,
  itemKey: PropTypes.string,
  itemValue: PropTypes.string,
  items: PropTypes.array.isRequired,
  onItemSelect: PropTypes.func,
  defaultSelectedItem: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  selectedItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.string,
};

export default DropdownSelect;

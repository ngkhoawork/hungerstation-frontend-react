import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import { persimmon } from 'utils/css/colors';
import { StyledDropdown, Label } from './StyledComponents';
import SubMenu from './SubMenu';

class DropdownMenu extends Component {
  state = { isDropdownVisible: false };

  dropdownWrapperRef = React.createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (
      this.dropdownWrapperRef.current &&
      !this.dropdownWrapperRef.current.contains(event.target)
    ) {
      this.setState({ isDropdownVisible: false });
    }
  };

  toggleDropdown = () => {
    const { isDropdownVisible } = this.state;
    this.setState({
      isDropdownVisible: !isDropdownVisible,
    });
  };

  render() {
    const { leftIcon, label = '', items, isRightAligned } = this.props;
    const { isDropdownVisible } = this.state;

    return (
      <div style={{ position: 'relative', minWidth: 0 }}>
        <StyledDropdown
          onClick={this.toggleDropdown}
          innerRef={this.dropdownWrapperRef}
        >
          <CircledItem
            color="white"
            width={22}
            style={{ cursor: 'pointer', flexShrink: 0 }}
            withShadow
          >
            <span style={{ color: persimmon, zIndex: 1 }}>{leftIcon}</span>
          </CircledItem>
          <Label>{label}</Label>
          <Icon name="arrow-dropdown" />
        </StyledDropdown>
        {isDropdownVisible ? (
          <SubMenu items={items} isRightAligned={isRightAligned} />
        ) : null}
      </div>
    );
  }
}

DropdownMenu.propTypes = {
  leftIcon: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string,
  isRightAligned: PropTypes.bool,
};

export default DropdownMenu;

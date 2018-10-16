import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import { persimmon } from 'utils/css/colors';
import StyledDropdown from './StyledDropdown';
import DropdownWrapper from './DropdownWrapper';
import SubMenu from './SubMenu';

class DropdownMenu extends Component {
  static propTypes = {
    leftIcon: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    label: PropTypes.string,
  };

  static defaultProps = {
    label: '',
  };

  state = {
    isDropdownVisible: false,
  };

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
    const { leftIcon, label, items } = this.props;
    const { isDropdownVisible } = this.state;
    return (
      <DropdownWrapper>
        <StyledDropdown
          onClick={this.toggleDropdown}
          innerRef={this.dropdownWrapperRef}
        >
          <CircledItem color="white" width={22} withShadow>
            <Paragraph size={16} color={persimmon}>
              {leftIcon}
            </Paragraph>
          </CircledItem>
          <Paragraph size={16}>{label}</Paragraph>
          <Icon name="arrow-dropdown" />
        </StyledDropdown>
        {isDropdownVisible && <SubMenu items={items} />}
      </DropdownWrapper>
    );
  }
}

export default DropdownMenu;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import StyledDropdown from './StyledDropdown';
import DropdownWrapper from './DropdownWrapper';
import Options from './Options';

class Dropdown extends Component {
  static propTypes = {
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedOption: PropTypes.object,
    handleOptionSelect: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
  };

  static defaultProps = {
    leftIcon: null,
    rightIcon: null,
    selectedOption: null,
  };

  state = {
    isDropdownVisible: false,
  };

  dropdownWrapperRef = React.createRef();

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  componentWillReceiveProps() {
    this.setState({ isDropdownVisible: false });
  }

  handleSelectOption = option => {
    const { handleOptionSelect } = this.props;
    this.toggleDropdown();
    handleOptionSelect(option);
  };

  handleClickOutside = event => {
    if (
      this.dropdownWrapperRef &&
      !this.dropdownWrapperRef.contains(event.target)
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
    const {
      leftIcon,
      rightIcon,
      placeholder,
      selectedOption,
      options,
    } = this.props;
    const { isDropdownVisible } = this.state;
    return (
      <DropdownWrapper>
        <StyledDropdown
          onClick={this.toggleDropdown}
          innerRef={this.dropdownWrapperRef}
        >
          {leftIcon && <Icon name={leftIcon} />}
          <Paragraph light size={16}>
            {(selectedOption && selectedOption.label) || placeholder}
          </Paragraph>
          {rightIcon && <Icon name={rightIcon} />}
        </StyledDropdown>
        {isDropdownVisible && (
          <Options onSelectOption={this.handleSelectOption} options={options} />
        )}
      </DropdownWrapper>
    );
  }
}

export default Dropdown;

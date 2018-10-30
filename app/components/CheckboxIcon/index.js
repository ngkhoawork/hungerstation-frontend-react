import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { lightGray } from 'utils/css/colors';

const CheckboxIcon = ({ isChecked, onClick }) => {
  if (isChecked) {
    return (
      <Icon name="toggle-green" style={iconStyle} size={20} onClick={onClick} />
    );
  }

  return <CheckboxEmpty onClick={onClick} />;
};

CheckboxIcon.propTypes = {
  isChecked: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CheckboxIcon;

const CheckboxEmpty = styled.div`
  border: solid 1px ${lightGray};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const iconStyle = {
  cursor: 'pointer',
};

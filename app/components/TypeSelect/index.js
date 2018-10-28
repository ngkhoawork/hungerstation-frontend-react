import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import { Container, Type, Name } from './StyledComponents';

const TypeSelect = ({ types, active, onSelect }) => (
  <Container>
    {types.map(type => (
      <Type
        key={type.id || type.key || type.name}
        active={active === type}
        onClick={() => onSelect(type)}
      >
        <Name active={active === type}>{type.label || type.name}</Name>
        {active === type ? <Icon name="check-mark-green" size={18} /> : null}
      </Type>
    ))}
  </Container>
);

TypeSelect.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object).isRequired,
  active: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
};

export default TypeSelect;

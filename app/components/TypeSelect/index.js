import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import { Container, Type, Name } from './StyledComponents';

const getKey = ({ id, key }) => {
  if (id !== undefined) return 'id';
  if (key !== undefined) return 'key';

  return 'name';
};

const TypeSelect = ({ types, active, onSelect, style, typeStyle }) => {
  const key = types.length && getKey(types[0]);

  return (
    <Container style={style}>
      {types.map(type => (
        <Type
          key={type[key]}
          active={active === type}
          onClick={() => onSelect(type)}
          style={typeStyle}
        >
          {type.icon ? (
            <Icon name={type.icon} size={18} style={{ marginRight: 10 }} />
          ) : null}
          <Name active={active === type}>{type.label || type.name}</Name>
          {active === type ? <Icon name="check-mark-green" size={18} /> : null}
        </Type>
      ))}
    </Container>
  );
};

TypeSelect.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object).isRequired,
  active: PropTypes.object,
  style: PropTypes.object,
  typeStyle: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
};

export default TypeSelect;

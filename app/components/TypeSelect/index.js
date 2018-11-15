import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import { DisabledOverlay } from 'utils/css/styledComponents';
import { Container, Type, Name } from './StyledComponents';

const getKey = ({ id, key }) => {
  if (id !== undefined) return 'id';
  if (key !== undefined) return 'key';

  return 'name';
};

const TypeSelect = ({
  types,
  active,
  disabledTypes,
  onSelect,
  style,
  typeStyle,
  disabledTypeStyle,
  withActiveIcon,
}) => {
  const key = types.length && getKey(types[0]);
  const isDisabled = type =>
    disabledTypes &&
    (disabledTypes.indexOf(type) > -1 || disabledTypes.indexOf(type[key]) > -1);

  return (
    <Container style={style}>
      {types.map(type => (
        <Type
          key={type[key]}
          active={active === type}
          onClick={() => !isDisabled(type) && onSelect(type)}
          style={isDisabled(type) ? disabledTypeStyle : typeStyle}
        >
          {type.icon ? (
            <Icon name={type.icon} size={18} style={{ marginRight: 10 }} />
          ) : null}
          <Name active={active === type}>{type.label || type.name}</Name>
          {withActiveIcon && active === type ? (
            <Icon name="check-mark-green" size={18} />
          ) : null}
          {isDisabled(type) ? <DisabledOverlay /> : null}
        </Type>
      ))}
    </Container>
  );
};

TypeSelect.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object).isRequired,
  active: PropTypes.object,
  disabledTypes: PropTypes.array,
  style: PropTypes.object,
  typeStyle: PropTypes.object,
  disabledTypeStyle: PropTypes.object,
  withActiveIcon: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

export default TypeSelect;

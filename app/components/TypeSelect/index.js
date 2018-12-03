import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import Icon from 'components/Icon';
import { DisabledOverlay } from 'utils/css/styledComponents';
import { sideMargin } from 'utils/css/styles';
import { Container, Type, Name } from './StyledComponents';

const MarginIconType = css`
  ${sideMargin('end', '10px')};
`;
const MarginIconCheck = css`
  ${sideMargin('start', '10px')};
`;

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
            <Icon name={type.icon} size={18} style={MarginIconType} />
          ) : null}
          <Name active={active === type}>{type.label || type.name}</Name>
          {withActiveIcon && active === type ? (
            <Icon name="toggle-green" size={18} style={MarginIconCheck} />
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

import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { DisabledOverlay } from 'utils/css/styledComponents';
import CheckboxIcon from 'components/CheckboxIcon';
import Price from 'components/Price';
import Notice from 'components/Notice';
import { Title } from 'components/Typography';
import messages from './messages';
import {
  Options,
  DeliveryOption,
  LeftSide,
  Content,
  titleStyle,
} from './StyledComponents';

const renderNotice = (options, selectedOption) => {
  if (!options.length) return null;

  if (!selectedOption.key) {
    return (
      <Notice
        message={intl.formatMessage(messages.required)}
        type="error"
        size="s"
      />
    );
  }

  const disabled = options.find(({ disabled }) => disabled);
  if (disabled) {
    return (
      <Notice
        message={intl.formatMessage(messages.disabled, { name: disabled.name })}
        size="s"
      />
    );
  }

  return null;
};

const DeliveryOptions = ({ selectedOption = {}, options = [], onSelect }) => (
  <div>
    <Options>
      {options.map(option => (
        <DeliveryOption
          key={option.key}
          isWithBorder={option.key === selectedOption.key}
          onClick={() => !option.disabled && onSelect(option)}
        >
          <LeftSide>
            <CheckboxIcon isChecked={option.key === selectedOption.key} />
          </LeftSide>
          <Content>
            <Title style={titleStyle}>{option.name}</Title>
            <Price price={option.price} />
          </Content>
          {option.disabled ? <DisabledOverlay /> : null}
        </DeliveryOption>
      ))}
    </Options>
    {renderNotice(options, selectedOption)}
  </div>
);

DeliveryOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  selectedOption: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
};

export default DeliveryOptions;

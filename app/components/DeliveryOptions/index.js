import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';
import { flex, mediaMedium, mediaMediumGreater } from 'utils/css/styles';
import { fuscousGray } from 'utils/css/colors';
import { borderRadius, border, boxShadow } from 'utils/css/variables';
import { DisabledOverlay } from 'utils/css/styledComponents';
import CheckboxIcon from 'components/CheckboxIcon';
import Price from 'components/Price';
import Notice from 'components/Notice';
import { Title } from 'components/Typography';
import messages from './messages';

const Options = styled.div`
  ${flex({})};

  ${mediaMedium`flex-direction: column;`};
`;

const DeliveryOption = styled.div`
  ${flex({ align: 'center' })};
  position: relative;
  padding: 10px 20px;
  border-radius: ${borderRadius};
  border: ${border};
  margin-bottom: 20px;
  box-shadow: ${({ isWithBorder }) => (isWithBorder ? boxShadow : 'none')};
  width: 100%;
  cursor: pointer;

  ${mediaMediumGreater`
    width: 50%;
    border-radius: ${borderRadius} 0 0 ${borderRadius};

    :nth-child(2) {
      border-radius: 0 ${borderRadius} ${borderRadius} 0;
      margin-left: 20px;
    }
  `};
`;

const LeftSide = styled.div`
  padding: 20px;
  flex-shrink: 0;
`;

const Content = styled.div`
  ${flex({ direction: 'column' })};
  font-size: 16px;
  line-height: 1;
  color: ${fuscousGray};
  flex-grow: 1;
`;

const titleStyle = {
  fontSize: 18,
  letterSpacing: 0.25,
  marginBottom: 5,
};

const renderNotice = (options, selectedOption) => {
  if (!selectedOption.id) {
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

const DeliveryOptions = ({ selectedOption = {}, options, onSelect }) => (
  <div>
    <Options>
      {options.map(option => (
        <DeliveryOption
          key={option.id}
          isWithBorder={option.id === selectedOption.id}
          onClick={() => !option.disabled && onSelect(option)}
        >
          <LeftSide>
            <CheckboxIcon isChecked={option.id === selectedOption.id} />
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

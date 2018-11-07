import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { Title } from 'components/Typography';
import PaymentSection from './PaymentSection';
import OptionContainer from './OptionContainer';
import messages from './messages';

const titleStyle = {
  fontSize: 18,
  letterSpacing: 0.25,
  margin: '0 20px',
};

const Cards = ({ selectedOption, cards = [], onSelect }) => (
  <PaymentSection title={intl.formatMessage(messages.cards)}>
    {cards.map(card => (
      <OptionContainer
        key={card.id}
        icon="discountOnPayment"
        title={card.name}
        onSelect={() => onSelect(card)}
        isSelected={card.id === selectedOption.id}
      >
        <Title style={titleStyle}>
          ••••&nbsp;&nbsp;&nbsp;••••&nbsp;&nbsp;&nbsp;••••&nbsp;&nbsp;&nbsp;
          {card.number.substr(-4)}
        </Title>
      </OptionContainer>
    ))}
  </PaymentSection>
);

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  selectedOption: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
};

export default Cards;

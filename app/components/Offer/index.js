import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { isMobile } from 'utils/css/styles';
import { lightGray, ironsideGray } from 'utils/css/colors';
import ModalFrame from 'containers/ModalFrameContainer';
import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import { Title, Description } from 'components/Typography';
import {
  descCss,
  Container,
  Content,
  moreIconCss,
  titleCss,
  StyledTooltip,
} from './StyledComponents';
import messages from './messages';

const Offer = ({ showModal, offer = {}, ...props }) => {
  const renderOfferModal = () => (
    <ModalFrame
      title={intl.formatMessage(messages.details)}
      headerStyle={{ textAlign: 'left' }}
    >
      <Description style={{ fontSize: 16, margin: '-10px 0 0' }}>
        {offer.description}
      </Description>
    </ModalFrame>
  );

  const handleOfferClick = () => {
    if (isMobile()) {
      showModal(renderOfferModal);
    }
  };

  if (!offer.title && !offer.description) return null;

  return (
    <Container {...props}>
      <Content onClick={handleOfferClick}>
        <CircledItem color={lightGray} inline width={28}>
          <Icon name="discountOnPayment" size={16} />
        </CircledItem>
        <Title css={titleCss}>{offer.title}</Title>
        <Icon name="more" size={15} css={moreIconCss} />
      </Content>
      <StyledTooltip>
        <Title style={{ fontSize: 14, color: ironsideGray }}>
          {intl.formatMessage(messages.details)}
        </Title>
        <Description css={descCss}>{offer.description}</Description>
      </StyledTooltip>
    </Container>
  );
};

Offer.propTypes = {
  offer: PropTypes.object,
  showModal: PropTypes.func.isRequired,
};

export default Offer;

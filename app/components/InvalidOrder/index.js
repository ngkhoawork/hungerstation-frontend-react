import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import ModalFrame from 'containers/ModalFrameContainer';
import Button from 'components/Button';
import Icon from 'components/Icon';
import { Title, Description } from 'components/Typography';
import messages from './messages';
import { containerStyle, Content, Footer, BtnStyle } from './StyledComponents';

const InvalidOrder = ({ errors = [], onBtnClick }) => (
  <ModalFrame css={containerStyle}>
    <Content>
      <Icon name="error-generic" size={56} style={{ margin: '-5px 0 20px' }} />
      <Title>{intl.formatMessage(messages.title)}</Title>
      <Description>{errors.map(({ value }) => value).join('\n')}</Description>
    </Content>
    <Footer>
      <Button
        primary={false}
        lift
        size="l"
        style={BtnStyle}
        onClick={onBtnClick}
      >
        {intl.formatMessage(messages.btn)}
      </Button>
    </Footer>
  </ModalFrame>
);

InvalidOrder.propTypes = {
  errors: PropTypes.array,
  onBtnClick: PropTypes.func.isRequired,
};

export default InvalidOrder;

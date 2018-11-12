import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import Button from 'components/Button';
import ModalFrame from 'containers/ModalFrameContainer';
import SearchBarContainer from 'containers/SearchBarContainer';
import messages from './messages';
import {
  containerStyle,
  headerStyle,
  Content,
  Footer,
} from './StyledComponents';

const LocationOptions = ({ onSubmit, city, district }) => (
  <ModalFrame
    title="Select Location"
    subtitle="select address"
    isMobileFullscreen
    css={containerStyle}
    headerCss={headerStyle}
  >
    <Content>
      <SearchBarContainer
        initValues={{
          city,
          district,
        }}
        hideSearch
      />
    </Content>
    <Footer>
      <Button primary inline size="l" onClick={onSubmit}>
        {intl.formatMessage(messages.submit)}
      </Button>
    </Footer>
  </ModalFrame>
);

LocationOptions.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  city: PropTypes.string,
  district: PropTypes.string,
};

export default LocationOptions;

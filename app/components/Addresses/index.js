import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import intl from 'utils/intlService';
import { mediaMedium, mediaMediumGreater } from 'utils/css/styles';
import { addressIndent } from 'utils/css/variables';
import { alabaster } from 'utils/css/colors';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Notice from 'components/Notice';
import Address from 'components/Address';
import Section from './Section';
import messages from './messages';

const Addresses = ({
  isLoading,
  selectedAddress,
  addresses,
  recentAddresses,
  onAddClick,
  onEditClick,
  onSelectToggle,
}) => {
  const renderRecentAddresses = () => (
    <Section title={intl.formatMessage(messages.recent)}>
      {recentAddresses.map(address => (
        <Address
          key={`${address.id} ${address.lat} ${address.lng}`}
          address={address}
          onSelectToggle={onSelectToggle}
          onEditClick={onEditClick}
        />
      ))}
    </Section>
  );

  const renderNotice = () => {
    if (
      isLoading ||
      selectedAddress ||
      addresses.find(({ branch_eligibility }) => branch_eligibility)
    ) {
      return null;
    }

    return (
      <Notice message={intl.formatMessage(messages.noEligible)} type="error" />
    );
  };

  return (
    <React.Fragment>
      <Section title={intl.formatMessage(messages.current)}>
        {selectedAddress ? (
          <Address
            isWithBorder
            isSelected
            address={selectedAddress}
            onEditClick={onEditClick}
          />
        ) : null}
        {addresses.map(address => (
          <Address
            key={`${address.id} ${address.latitude} ${address.longitude}`}
            address={address}
            onSelectToggle={onSelectToggle}
            onEditClick={onEditClick}
          />
        ))}
        {renderNotice()}
        <BtnContainer>
          <Button
            primary={false}
            lift={false}
            inline
            size="l"
            css={addBtnCss}
            color={alabaster}
            onClick={onAddClick}
          >
            <React.Fragment>
              {intl.formatMessage(messages.addNew)} &nbsp;
              <Icon name="add-new-address" size={16} />
            </React.Fragment>
          </Button>
        </BtnContainer>
      </Section>
      {recentAddresses.length ? renderRecentAddresses() : null}
    </React.Fragment>
  );
};

Addresses.propTypes = {
  isLoading: PropTypes.bool,
  selectedAddress: PropTypes.object,
  addresses: PropTypes.arrayOf(PropTypes.object),
  recentAddresses: PropTypes.arrayOf(PropTypes.object),
  onAddClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onSelectToggle: PropTypes.func.isRequired,
};

export default Addresses;

const BtnContainer = styled.div`
  margin-top: 10px;

  ${mediaMediumGreater`
    margin-left: ${addressIndent}
  `};
`;

const addBtnCss = css`
  ${mediaMedium`width: 100%;`};
`;

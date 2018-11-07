import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';
import { addressIndent } from 'utils/css/variables';
import { alabaster } from 'utils/css/colors';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Address from 'components/Address';
import Section from './Section';
import messages from './messages';

const Addresses = ({
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
        <BtnContainer>
          <Button
            primary={false}
            lift={false}
            inline
            size="l"
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
  selectedAddress: PropTypes.object,
  addresses: PropTypes.arrayOf(PropTypes.object),
  recentAddresses: PropTypes.arrayOf(PropTypes.object),
  onAddClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onSelectToggle: PropTypes.func.isRequired,
};

export default Addresses;

const BtnContainer = styled.div`
  margin-left: ${addressIndent};
`;

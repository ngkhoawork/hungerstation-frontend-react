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

const Addresses = ({ onAddClick, onEditClick, onSelectToggle }) => (
  <React.Fragment>
    <Section title={intl.formatMessage(messages.current)}>
      <Address
        isWithBorder
        isSelected
        address={{ address: 'Almohamad, Baljurshani', type: 'home' }}
        onSelectToggle={onSelectToggle}
        onEditClick={onEditClick}
      />
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
    <Section title={intl.formatMessage(messages.recent)}>
      <Address
        address={{ address: 'Almohamad, Baljurshani', type: 'work' }}
        onSelectToggle={onSelectToggle}
        onEditClick={onEditClick}
      />
      <Address
        address={{ address: 'Almohamad, Baljurshani', type: 'home' }}
        onSelectToggle={onSelectToggle}
        onEditClick={onEditClick}
      />
    </Section>
  </React.Fragment>
);

Addresses.propTypes = {
  // addresses: PropTypes.arrayOf(PropTypes.object),
  onAddClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onSelectToggle: PropTypes.func.isRequired,
};

export default Addresses;

const BtnContainer = styled.div`
  margin-left: ${addressIndent};
`;

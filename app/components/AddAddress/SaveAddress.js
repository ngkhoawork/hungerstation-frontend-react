import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';
import { addressTypes, otherAddressType } from 'modules/address/constants';
import { isChangeableType } from 'modules/address/helpers';
import addressMessages from 'modules/address/messages';
import TypeSelect from 'components/TypeSelect';
import CheckboxIcon from 'components/CheckboxIcon';
import { flex } from 'utils/css/styles';
import { lightGray } from 'utils/css/colors';
import { borderRadius, border } from 'utils/css/variables';
import messages from './messages';

class SaveAddress extends React.Component {
  constructor(props) {
    super(props);

    const { address, disabledTypes } = this.props;
    const { specific_type: type } = address;
    const types = addressTypes
      .filter(({ key }) => key !== otherAddressType)
      .map(({ key }) => key);
    this.disabledTypes =
      type && type !== otherAddressType
        ? types.filter(t => t !== type)
        : disabledTypes;
    this.isChangeableType = type ? isChangeableType(type) : true;
    this.addressTypes = addressTypes
      .filter(({ key }) => key !== otherAddressType)
      .map(addr => ({
        ...addr,
        name: intl.formatMessage(addressMessages[addr.key]),
      }));
    this.state = {
      isSaveChecked: !!type && type !== otherAddressType,
      selectedType: this.addressTypes.find(({ key }) => key === type) || {},
    };
  }

  getState = () => {
    const { selectedType, isSaveChecked } = this.state;
    const specific_type = selectedType.key;

    if (!isSaveChecked) return {};

    return { specific_type };
  };

  handleTypeSelect = selectedType => {
    if (this.isChangeableType) this.setState({ selectedType });
  };

  handleSaveToggle = () => {
    if (this.isChangeableType) {
      this.setState(state => ({ isSaveChecked: !state.isSaveChecked }));
    }
  };

  render() {
    const { isSaveChecked, selectedType } = this.state;

    return (
      <Container>
        <Header>
          <CheckboxIcon
            isChecked={isSaveChecked}
            onClick={this.handleSaveToggle}
          />
          &nbsp; &nbsp;
          {intl.formatMessage(messages.save)}
        </Header>
        <Content isVisible={isSaveChecked}>
          <TypeSelect
            types={this.addressTypes}
            active={selectedType}
            onSelect={this.handleTypeSelect}
            style={typesStyle}
            typeStyle={typeStyle}
            disabledTypeStyle={disabledTypeStyle}
            disabledTypes={this.disabledTypes}
            withActiveIcon
          />
        </Content>
      </Container>
    );
  }
}

SaveAddress.propTypes = {
  address: PropTypes.object,
  disabledTypes: PropTypes.array,
};

export default SaveAddress;

const Container = styled.div`
  border-radius: ${borderRadius};
  border: solid 1px ${lightGray};
  padding: 20px;
  margin: 20px 0;
`;

const Header = styled.div`
  ${flex({ align: 'center' })};
  margin-bottom: 10px;
`;

const typesStyle = {
  flexDirection: 'row',
};

const disabledTypeStyle = {
  padding: '6px 12px',
  marginRight: 10,
};

const typeStyle = {
  ...disabledTypeStyle,
  border,
  borderRadius,
};

const Content = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

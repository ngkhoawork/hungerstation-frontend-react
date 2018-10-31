import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
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
    const types = addressTypes.map(({ key }) => key);
    this.disabledTypes = type ? types.filter(t => t !== type) : disabledTypes;
    this.isChangeableType = type ? isChangeableType(type) : true;
    this.addressTypes = addressTypes.map(addr => ({
      ...addr,
      name: intl.formatMessage(addressMessages[addr.key]),
    }));
    this.nameRef = React.createRef();
    this.state = {
      isSaveChecked: !!type,
      selectedType: this.addressTypes.find(({ key }) => key === type) || {},
    };
  }

  getState = () => {
    const { selectedType, isSaveChecked } = this.state;
    const name = this.nameRef.current.value;
    const specific_type = selectedType.key;

    if (!isSaveChecked) return {};

    if (!specific_type || (specific_type === otherAddressType && !name)) {
      return false;
    }

    return { specific_type, name: name || undefined };
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
    const { address } = this.props;
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
          />
          <Name>
            <TextField
              type="text"
              required={selectedType.key === otherAddressType}
              defaultValue={address.name}
              disabled={
                !selectedType.key ||
                !this.isChangeableType ||
                !isChangeableType(selectedType.key)
              }
              inputRef={this.nameRef}
              label={intl.formatMessage(messages.name)}
              fullWidth
            />
          </Name>
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

const Name = styled.div`
  width: calc(50% - 20px);
`;

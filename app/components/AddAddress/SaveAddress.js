import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import intl from 'utils/intlService';
import { addressTypes } from 'components/Address/constants';
import TypeSelect from 'components/TypeSelect';
import CheckboxIcon from 'components/CheckboxIcon';
import { flex } from 'utils/css/styles';
import { lightGray } from 'utils/css/colors';
import { borderRadius, border } from 'utils/css/variables';
import messages from './messages';

class SaveAddress extends React.Component {
  constructor(props) {
    super(props);

    this.nameRef = React.createRef();
    this.state = {
      isSaveChecked: false,
      selectedType: addressTypes[0],
    };
  }

  handleTypeSelect = selectedType => {
    console.log(selectedType);
    this.setState({ selectedType });
  };

  handleSaveToggle = () =>
    this.setState(state => ({ isSaveChecked: !state.isSaveChecked }));

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
            types={addressTypes}
            active={selectedType}
            onSelect={this.handleTypeSelect}
            style={typesStyle}
            typeStyle={typeStyle}
          />
          <Name>
            <TextField
              type="text"
              defaultValue={address.name}
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

const typeStyle = {
  border,
  borderRadius,
  padding: '6px 12px',
  marginRight: 10,
};

const Content = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const Name = styled.div`
  width: calc(50% - 20px);
`;

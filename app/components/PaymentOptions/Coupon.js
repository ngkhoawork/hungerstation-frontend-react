import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import intl from 'utils/intlService';
import {
  flex,
  mediaMedium,
  mediaMediumGreater,
  sideMargin,
} from 'utils/css/styles';
import { borderRadius, border, addressIndent } from 'utils/css/variables';
import Icon from 'components/Icon';
import Button from 'components/Button';
import Notice from 'components/Notice';
import { Title } from 'components/Typography';
import messages from './messages';

const Container = styled.div`
  ${flex({ align: 'center', wrap: 'wrap' })};
  padding: 20px;
  border-radius: ${borderRadius};
  border: ${border};

  ${mediaMedium`
    ${flex({ direction: 'column', align: 'flex-start' })};
  `};
`;

const LeftSide = styled.div`
  width: ${addressIndent};
  ${flex({ shrink: 0 }, false)};
  margin-top: 0;
  margin-bottom: 15px;
  ${sideMargin('end', '10px')};

  ${mediaMedium`width: 100%; margin: 0 0 10px 0;`};
`;

const Content = styled.div`
  ${flex({ align: 'center', grow: 1 })};

  ${mediaMedium`
    width: 100%;
    ${flex({ direction: 'column', align: 'flex-end' })};
  `};
`;

const Block = styled.div`
  ${flex({ align: 'center' })};
  width: 100%;
  ${mediaMedium`
    ${flex({ direction: 'column' })};
  `};
`;

const DesktopNotice = styled.div`
  display: flex;
  ${sideMargin('start', '110px')};
  ${mediaMedium`display: none;`};
`;

const MobileNotice = styled.div`
  ${mediaMediumGreater`display: none;`};
`;

const renderNotice = coupon => {
  if (coupon.isValid === false || coupon.isDisabled) {
    const msg = intl.formatMessage(
      messages[coupon.isDisabled ? 'couponAddressRequired' : 'couponError'],
    );

    return <Notice message={msg} type="error" size="s" />;
  }

  if (coupon.isValid) {
    return (
      <Notice
        message={intl.formatMessage(messages.couponSuccess)}
        type="success"
        size="s"
      />
    );
  }

  return null;
};

const getAdornment = coupon => {
  let icon;

  if (coupon.isValid === false) icon = 'error';
  if (coupon.isValid) icon = 'toggle-green';

  if (!icon) return null;

  return (
    <InputAdornment position="end">
      <Icon name={icon} size={18} />
    </InputAdornment>
  );
};

class Coupon extends React.Component {
  constructor() {
    super();
    this.state = { name: '' };
  }

  handleNameChange = ({ target }) => this.setState({ name: target.value });

  handleSubmit = () => this.props.onSubmit(this.state.name);

  handleDelete = () => {
    this.setState({ name: '' });
    this.props.onDelete();
  };

  render() {
    const { coupon = {} } = this.props;

    return (
      <Container>
        <Block>
          <LeftSide>
            <Title>{intl.formatMessage(messages.addCoupon)}</Title>
          </LeftSide>
          <Content>
            <TextField
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              label={intl.formatMessage(messages.haveCoupon)}
              fullWidth
              InputProps={{
                endAdornment: getAdornment(coupon),
              }}
            />
            <MobileNotice>{renderNotice(coupon)}</MobileNotice>
            <Button
              inline
              primary={false}
              lift={false}
              style={{ border, flexShrink: 0, margin: '10px 0 10px 20px' }}
              onClick={coupon.value ? this.handleDelete : this.handleSubmit}
            >
              {intl.formatMessage(
                messages[`${coupon.value ? 'delete' : 'add'}Coupon`],
              )}
            </Button>
          </Content>
        </Block>
        <DesktopNotice>{renderNotice(coupon)}</DesktopNotice>
      </Container>
    );
  }
}

Coupon.propTypes = {
  coupon: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Coupon;

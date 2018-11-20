import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';
import { flex, sideMargin } from 'utils/css/styles';
import { jade, lightGray, silverChalice, fuscousGray } from 'utils/css/colors';
import Icon from 'components/Icon';

const Column = styled.div`
  ${flex({ direction: 'column' })};
`;

const Wrapper = styled.div`
  ${flex({ justify: 'space-between' })};
  padding: 20px 0;
  border-bottom: solid 1px ${lightGray};

  :last-child: {
    border-bottom: none;
  }
`;

const Row = styled.div`
  ${flex({ align: 'flex-start' })};
  line-height: 1;
`;

const Quantity = styled.div`
  color: ${jade};
  font-size: 16px;
  ${sideMargin('end', '10px')};
`;

const TitleWrapper = styled.div`
  ${flex({ align: 'flex-start' })};
`;

const Title = styled.div`
  color: ${fuscousGray};
  font-size: 18px;
`;

const Description = styled.div`
  color: ${silverChalice};
  font-size: 14px;
`;

const Price = styled.div`
  color: ${silverChalice};
  font-size: 16px;
  ${sideMargin('end', '12px')};
`;

const IconEdit = styled.div`
  ${sideMargin('start', '5px')};
  ${sideMargin('end', '10px')};
`;

const IconTrash = styled.div`
  ${sideMargin('end', '4px')};
`;

const OrderElement = ({
  quantity,
  price,
  additions,
  name,
  onEditClick,
  onRemoveFromCart,
  readOnly,
}) => (
  <Fragment>
    <Wrapper>
      <Row>
        <Quantity>{quantity}x</Quantity>
        <Column>
          <TitleWrapper>
            <Title>{name}</Title>
            {!readOnly && (
              <IconEdit>
                <Icon name="edit" onClick={onEditClick} />
              </IconEdit>
            )}
          </TitleWrapper>
          <Description>
            {additions.map(({ name }) => name).join(', ')}
          </Description>
        </Column>
      </Row>
      <Row>
        <Price>
          {intl.formatNumber(
            price + additions.reduce((sum, { price }) => sum + price, 0),
            { style: 'currency', currency: 'SAR' },
          )}
        </Price>
        {!readOnly && (
          <IconTrash>
            <Icon name="trash-red" size={20} onClick={onRemoveFromCart} />
          </IconTrash>
        )}
      </Row>
    </Wrapper>
  </Fragment>
);

OrderElement.propTypes = {
  quantity: PropTypes.number.isRequired,
  additions: PropTypes.arrayOf(PropTypes.object),
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
};

export default OrderElement;

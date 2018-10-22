import styled from 'styled-components';
import { pageOffsetX, mobPageOffsetX, borderRadius } from 'utils/css/variables';
import { flex, mediaMedium, mediaMediumGreater } from 'utils/css/styles';
import restaurantImg from 'images/restaurant.png';

export const StyledPage = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

export const NavHeader = styled.div`
  height: 46px;
  padding: 0 ${pageOffsetX};
  ${flex({ align: 'center' })};

  ${mediaMedium`padding: ${mobPageOffsetX};`};
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const LeftSide = styled.div`
  flex-grow: 1;
`;

export const RightSide = styled.div`
  margin: 0 20px;
  position: sticky;
  top: 0;

  ${mediaMedium`display: none;`};
`;

export const Header = styled.div`
  position: relative;
  border-top-right-radius: ${borderRadius};
  padding-top: 42.2%;
  width: 100%;
  background: url(${restaurantImg}) no-repeat;

  ${mediaMedium`
    margin-bottom: 60px;
    border-radius: 0;
  `};
`;

export const RestaurantInfoContainer = styled.div`
  position: absolute;
  left: ${pageOffsetX};
  right: 0;
  bottom: 0;

  ${mediaMedium`
    left: ${mobPageOffsetX};
    right: ${mobPageOffsetX};
    bottom: -20%;
  `};
`;

export const ProductsContainer = styled.div`
  padding: 40px 0 0 ${pageOffsetX};
  display: flex;

  ${mediaMedium`
    padding: 40px ${mobPageOffsetX} 0;
    flex-direction: column;
  `};
`;

export const StyledProductTypes = styled.div`
  width: 140px;
  flex-shrink: 0;

  ${mediaMediumGreater`margin-right: 20px;`};

  ${mediaMedium`
    width: 100%;
    margin-bottom: 20px;
  `};
`;

export const CartBtns = styled.div`
  margin: 30px ${mobPageOffsetX};
  text-align: center;

  ${mediaMediumGreater`display: none;`};
`;

export const BasketBtn = styled.span`
  cursor: pointer;
  padding: 6px 12px;
  margin-bottom: 10px;
  display: inline-block;
  user-select: none;
`;

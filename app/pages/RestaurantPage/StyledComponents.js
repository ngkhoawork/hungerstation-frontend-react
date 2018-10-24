import styled from 'styled-components';
import {
  maxPageWidth,
  pageOffsetX,
  mobPageOffsetX,
  borderRadius,
} from 'utils/css/variables';
import {
  flex,
  mediaMedium,
  mediaMediumGreater,
  device,
} from 'utils/css/styles';
import restaurantImg from 'images/restaurant.png';
import restaurantImg2x from 'images/restaurant@2x.png';
import restaurantImg3x from 'images/restaurant@3x.png';

export const StyledPage = styled.div`
  width: 100%;
  max-width: ${maxPageWidth};
  margin-bottom: 60px;

  ${mediaMedium`max-width: 100%;`};
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

export const Loading = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
  height: 100px;
  font-size: 30px;
`;

export const LeftSide = styled.div`
  flex-grow: 1;
  max-width: 100%;
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
  background-image: url(${restaurantImg});
  background-repeat: no-repeat;

  ${mediaMedium`
    margin-bottom: 100px;
    border-radius: 0;
    background-size: cover;
  `};

  ${device.retina`background-image: url(${restaurantImg2x});`};

  ${device.retina3x`background-image: url(${restaurantImg3x});`};
`;

export const RestaurantInfoContainer = styled.div`
  position: absolute;
  left: ${pageOffsetX};
  right: 0;
  bottom: 0;

  ${mediaMedium`
    left: ${mobPageOffsetX};
    right: ${mobPageOffsetX};
    bottom: -100px;
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

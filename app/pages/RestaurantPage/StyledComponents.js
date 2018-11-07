import styled from 'styled-components';
import {
  navHeaderHeight,
  maxPageWidth,
  pageOffsetX,
  mobPageOffsetX,
  smallMobPageOffsetX,
  borderRadius,
  zIndexStickyMenu,
} from 'utils/css/variables';
import {
  flex,
  mediaSmall,
  mediaMedium,
  mediaMediumGreater,
  device,
} from 'utils/css/styles';
import { gold } from 'utils/css/colors';
import restaurantImg from 'images/bg-pattern.png';
import restaurantImg2x from 'images/bg-pattern@2x.png';
import restaurantImg3x from 'images/bg-pattern@3x.svg';

export const StyledPage = styled.div`
  width: 100%;
  max-width: ${maxPageWidth};
  margin-bottom: 60px;

  ${mediaMedium`
    max-width: 100%;
  `};
`;

export const NavHeader = styled.div`
  height: ${navHeaderHeight};
  padding: 0 ${pageOffsetX};
  ${flex({ align: 'center' })};

  ${mediaMedium`
    padding: ${mobPageOffsetX};
  `};

  ${mediaSmall`
    padding: ${smallMobPageOffsetX};
  `};
`;

export const ContentContainer = styled.div`
  ${flex({ align: 'flex-start' })};
`;

export const Loading = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
  height: 100px;
  font-size: 30px;
`;

export const LeftSide = styled.div`
  ${flex({ grow: 1 }, false)};
  max-width: 100%;
`;

export const RightSide = styled.div`
  margin: 0 20px;
  position: sticky;
  top: 0;

  ${mediaMedium`
    display: none;
  `};
`;

export const Header = styled.div`
  position: relative;
  border-top-right-radius: ${borderRadius};
  padding-top: 42.2%;
  width: 100%;
  background-image: url(${restaurantImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${gold};

  ${mediaMedium`
    margin-bottom: 100px;
    border-radius: 0;
    background-size: cover;
  `};

  ${device.retina`
    background-image: url(${restaurantImg2x});
  `};

  ${device.retina3x`
    background-image: url(${restaurantImg3x});
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
    bottom: -100px;
  `};

  ${mediaSmall`
    left: ${smallMobPageOffsetX};
    right: ${smallMobPageOffsetX};
    bottom: -100px;
  `};
`;

export const ProductsContainer = styled.div`
  padding: 40px 0 0 ${pageOffsetX};
  ${flex({}, true)};

  ${mediaMedium`
    padding: 40px ${mobPageOffsetX} 0;
    ${flex({ direction: 'column' }, false)};
  `};

  ${mediaSmall`
    padding: 40px ${smallMobPageOffsetX} 0;
    ${flex({ direction: 'column' }, false)};
  `};
`;

export const StyledProductTypes = styled.div`
  width: 140px;
  ${flex({ shrink: 0 }, false)};
  position: sticky;
  background: white;
  z-index: ${zIndexStickyMenu};

  ${mediaMediumGreater`
    margin-right: 20px;
    top: 10px;
    align-self: flex-start;
  `};

  ${mediaMedium`
    width: 100%;
    padding-top: 10px;
    top: 0;
    margin-bottom: 20px;
  `};
`;

export const CartBtns = styled.div`
  margin: 30px ${mobPageOffsetX};
  text-align: center;

  ${mediaSmall`margin: 30px ${smallMobPageOffsetX};`};

  ${mediaMediumGreater`display: none;`};
`;

export const BasketBtn = styled.span`
  cursor: pointer;
  padding: 6px 12px;
  margin-bottom: 10px;
  display: inline-block;
  user-select: none;
`;

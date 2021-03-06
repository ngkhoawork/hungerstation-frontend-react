import styled, { css } from 'styled-components';
import {
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
  sideMargin,
} from 'utils/css/styles';
import restaurantImg from 'images/bg-pattern-detail.png';
import restaurantImg2x from 'images/bg-pattern-detail@2x.png';
import restaurantImg3x from 'images/bg-pattern-detail@3x.png';
import restaurantImgMob from 'images/bg-pattern.png';
import restaurantImgMob2x from 'images/bg-pattern@2x.png';
import restaurantImgMob3x from 'images/bg-pattern@3x.png';

export const footerCss = css`
  ${mediaMedium`display: none;`};
`;

export const StyledPage = styled.div`
  width: 100%;
  max-width: ${maxPageWidth};

  ${mediaMediumGreater`margin-bottom: 60px;`};

  ${mediaMedium`max-width: 100%;`};
`;

export const ContentContainer = styled.div`
  ${flex({ align: 'flex-start' })};
`;

export const LeftSide = styled.div`
  ${flex({ grow: 1 }, false)};
  max-width: 100%;
  position: relative;
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
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${restaurantImg});

  ${mediaMediumGreater`padding-top: 31.782945736%;`};

  ${device.retina`
    background-image: url(${restaurantImg2x});
  `};

  ${device.retina3x`
    background-image: url(${restaurantImg3x});
  `};

  ${mediaMedium`display: none;`};
`;

export const MobileHeader = styled(Header)`
  ${mediaMediumGreater`display: none;`};

  ${mediaMedium`
    display: block;
    height: 220px;
    border-radius: 0;
    background-size: cover;
    background-image: url(${restaurantImgMob});

    ${device.retina`
      background-image: url(${restaurantImgMob2x});
    `};

    ${device.retina3x`
      background-image: url(${restaurantImgMob3x});
    `};
  `};
`;

export const RestaurantInfoContainer = styled.div`
  ${mediaMediumGreater`
    position: absolute;
    left: ${pageOffsetX};
    right: 0;
    bottom: 0;
  `};

  ${mediaMedium`display: none;`};
`;

export const MobileRestaurantInfoContainer = styled.div`
  ${mediaMediumGreater`display: none;`};

  ${mediaMedium`
    position: relative;
    transform: translateY(-140px);
    margin-bottom: -140px;
    width: calc(100% - ${mobPageOffsetX} * 2);
    left: ${mobPageOffsetX};
  `};

  ${mediaSmall`
    width: calc(100% - ${smallMobPageOffsetX} * 2);
    left: ${smallMobPageOffsetX};
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
    ${sideMargin('end', '20px')}
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

export const cartBtnsStyle = css`
  margin: 30px ${mobPageOffsetX};

  ${mediaSmall`margin: 30px ${smallMobPageOffsetX};`};

  ${mediaMediumGreater`display: none;`};
`;

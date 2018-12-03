import styled, { css } from 'styled-components';
import imgPlaceholder from 'images/burger-icon.png';
import { fontFamilyLight, border } from 'utils/css/variables';
import {
  flex,
  mediaSmall,
  mediaMedium,
  mediaMediumGreater,
  sideMargin,
  sidePosition,
} from 'utils/css/styles';

export const pageCss = css`
  ${mediaMedium`padding: 0 23px;`};
`;

export const desktopProfileNav = css`
  ${mediaMedium`display: none;`};
`;

export const mobileProfileNav = css`
  ${mediaMediumGreater`display: none;`};
`;

export const ContentContainer = styled.div`
  ${flex({ align: 'flex-start' })};

  ${mediaMediumGreater`margin-top: 40px;`};

  ${mediaMedium`
    ${flex({ direction: 'column' })};
  `};
`;

export const LeftSide = styled.div`
  ${flex({ grow: 1 }, false)};
  max-width: 100%;

  ${mediaMedium`width: 100%;`};
`;

export const RightSide = styled.div`
  margin: 0 20px;

  ${mediaMedium`width: 100%;`};

  ${mediaMediumGreater`
    position: sticky;
    top: 0;
  `};
`;

export const StyledOrderList = styled.div`
  width: 100%;
  position: relative;
  ${flex({ align: 'flex-start', direction: 'column' })};

  ${mediaMedium`
    ${flex()};
    padding: 0;
  `};
`;

export const StyledList = styled.div`
  width: 100%;
  ${flex({ align: 'flex-start', wrap: 'wrap' })};

  ${mediaMedium`
    ${flex({ direction: 'column', align: 'center' }, false)};
    width: 100%;
`};
`;

export const List = styled.div`
  width: 100%;
`;

export const Item = styled.div`
  ${flex({ direction: 'column' })};
  position: relative;
  padding: 22px 0;
  margin-bottom: 25px;
  border-bottom: ${border};
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`;

export const Img = styled.div`
  border-radius: 55px;
  box-shadow: 8px 12px 23px -3px rgba(59, 59, 59, 0.13);
  background-color: white;
  background-image: url(${({ image }) => image || imgPlaceholder});
  background-size: contain;
  background-position: center;
  ${flex({ shrink: 0 }, false)};

  ${mediaMediumGreater`
    height: 110px;
    width: 110px;
  `};

  ${mediaMedium`
    width: 25%;
    padding-top: 25%;
  `};
`;

export const Content = styled.div`
  ${sideMargin('start', '30px')};
  ${flex({ direction: 'column', justify: 'space-between', grow: 1 })};

  ${mediaMedium`margin-left: 18px;`};
  ${mediaSmall`word-break: break-word;`};
`;

export const TitleContainer = styled.div`
  ${flex({ align: 'flex-start' })};
  margin-bottom: 10px;
  flex-direction: column;
`;

export const titleStyle = css`
  font-size: 20px;
`;

export const OrderItems = styled.div`
  color: #434340;
  font-family: ${fontFamilyLight};
  font-size: 14px;
  line-height: 14px;

  ${mediaMedium`
    margin-bottom: 10px;
    ${flex({ wrap: 'wrap' })};
  `};
`;

export const Description = styled.div`
  ${flex({ justify: 'space-between', grow: 1 })};
  flex: 1;
`;

export const PriceContainer = styled.div`
  line-height: 1;
  ${flex({ align: 'center' })};

  ${mediaMediumGreater`
    // position: absolute;
    // right: 0;
    // top: -20px;
  `};
`;

export const Footer = styled.div`
  ${flex({ justify: 'flex-end', align: 'center' })};

  ${mediaMedium`display: none;`};
`;

export const DeliveryLocation = styled.div`
  position: relative;
  display: block;
  height: 17px;
  color: #434340;
  font-family: ${fontFamilyLight};
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.22px;
  line-height: 17px;
  margin: 6px 20px;
`;

export const IconPosition = styled.div`
  position: absolute;
  ${sidePosition('start', '-20px')};
  top: 2px;
`;

export const OrderState = styled.div`
  display: block;
`;

export const OrdersSection = styled.div`
  width: 100%;
  margin-bottom: 50px;
  overflow: visible;
  position: relative;
  ${flex({
    align: 'flex-start',
    justify: 'flex-start',
    direction: 'column',
  })};

  ${mediaMediumGreater`
    ${sideMargin('start', '40px')};
  `};
`;

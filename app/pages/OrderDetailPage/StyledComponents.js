import styled, { css } from 'styled-components';
import imgPlaceholder from 'images/burger-icon.png';
import {
  navHeaderHeight,
  maxPageWidth,
  fontFamilyLight,
  mobPageOffsetX,
  smallMobPageOffsetX,
  borderRadius,
} from 'utils/css/variables';
import {
  flex,
  mediaSmall,
  mediaMedium,
  mediaLess,
  mediaMediumGreater,
} from 'utils/css/styles';
import {
  lightGray,
  alabaster,
  silverChalice,
  jade,
  persimmon,
  errorBg,
} from 'utils/css/colors';

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
  padding: 0;
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
  margin-top: 40px;
`;

export const Loading = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
  height: 100px;
  font-size: 30px;
  width: 100%;
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

export const ProfileNavWrapper = styled.div`
  position: relative;
  width: 232px;
  box-shadow: 0 0 35px 5px rgba(183, 157, 157, 0.09);
  padding: 30px 24px 24px;
  ${flex({ align: 'flex-start', justify: 'center', direction: 'column' })};

  ${mediaLess(1000)`
    display: none;
  `};
`;

export const OrderDetailSection = styled.div`
  width: 912px;
  margin-left: 40px;
  margin-bottom: 50px;
  overflow: visible;
  position: relative;
  ${flex({
    align: 'flex-start',
    justify: 'flex-start',
    direction: 'column',
  })};

  ${mediaLess(1000)`
    flex: 1;
  `};

  ${mediaLess(600)`
    padding: 0;
    width:100%
  `};
`;

export const StyledOrderList = styled.div`
  width: 100%;
  position: relative;
  ${flex({
    align: 'flex-start',
    justify: 'space-between',
    direction: 'column',
    wrap: 'wrap',
  })};

  ${mediaLess(1250)`
    ${flex({ justify: 'flex-start' }, false)}
  `};

  ${mediaLess(600)`
    ${flex({ wrap: 'nowrap' }, false)};
    padding: 20px;
    padding-left: 0;
  `};
`;

export const StyledList = styled.div`
  width: 912px;
  ${flex({ align: 'flex-start', wrap: 'wrap' })};

  ${mediaLess(600)`
    ${flex({ direction: 'column', align: 'center' }, false)};
    width: 100%;
`};
`;

export const List = styled.div`
  width: 100%;
`;

export const Item = styled.div`
  ${flex({ align: 'flex-start' })};
  position: relative;
  padding: 35px 0;
  border-bottom: 1px solid ${lightGray};
  width: 100%;

  :last-child {
    border-bottom: none;
  }

  ${mediaMedium`
    border-bottom: none;
    margin: 40px 0;
  `};
`;

export const Img = styled.div`
  height: 110px;
  width: 110px;
  border-radius: 55px;
  box-shadow: 8px 12px 23px -3px rgba(59, 59, 59, 0.13);
  background-color: white;
  background-image: url(${({ image }) => image || imgPlaceholder});
  background-size: contain;
  background-position: center;
  ${flex({ shrink: 0 }, false)};
`;

export const Content = styled.div`
  margin-left: 30px;
  ${flex({ direction: 'column', justify: 'space-between', grow: 1 })};

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
  left: -20px;
  top: 2px;
`;

export const Status = styled.div`
  padding: 8px 12px;
  border-radius: ${borderRadius};
  background-color: ${({ color }) => {
    if (color === 'error') return errorBg;
    return alabaster;
  }};
  color: ${({ color }) => {
    if (color === 'error') return persimmon;
    if (color === 'success') return jade;
    return silverChalice;
  }};
  font-size: 12px;
  line-height: 1;
  margin-left: 5px;
`;

export const OrderState = styled.div`
  display: block;
`;

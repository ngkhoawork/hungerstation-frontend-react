import styled, { css } from 'styled-components';
import imgPlaceholder from 'images/burger-icon.png';
import {
  navHeaderHeight,
  maxPageWidth,
  fontFamilyLight,
  fontFamilyRegular,
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
import { lightGray, silverChalice } from 'utils/css/colors';

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
  margin-top: 60px;
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

export const OrdersSection = styled.div`
  width: 912px;
  margin-left: 40px;
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
  ${flex({ direction: 'column' })};
  position: relative;
  padding-bottom: 20px;
  margin: 40px 20px;
  border-bottom: 1px solid ${lightGray};
  cursor: pointer;

  :last-child {
    border-bottom: none;
  }

  ${mediaMedium`
    border-bottom: none;
    margin: 40px 0;
  `};
`;

export const Img = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 10px;
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
`;

export const titleStyle = css`
  font-size: 18px;
`;

export const Description = styled.div`
  color: ${silverChalice};
  font-family: ${fontFamilyRegular};
  font-size: 14px;
  line-height: 14px;
`;

export const PriceContainer = styled.div`
  line-height: 1;
  ${flex({ align: 'center' })};

  ${mediaMediumGreater`
    position: absolute;
    right: 0;
    top: -20px;
  `};
`;

export const AddBtn = styled.div`
  ${flex({ align: 'center', shrink: 0 })};
  line-height: 1;
`;

export const Footer = styled.div`
  ${flex({ justify: 'flex-end', align: 'center' })};

  ${mediaMedium`display: none;`};
`;

export const MobileFooter = styled.div`
  ${mediaMedium`
    ${flex({ justify: 'space-between', align: 'center' })};
    border: solid 1px ${lightGray};
    border-radius: ${borderRadius};
    padding: 12px 16px;
    width: 100%;
    margin-top: 20px;
  `};

  ${mediaMediumGreater`
    display: none;
  `};
`;

export const DeliveryLocation = styled.div`
  position: relative;
  display: inline-block;
  height: 17px;
  color: #434340;
  font-family: ${fontFamilyLight};
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.22px;
  line-height: 17px;
  margin: 0 0 20px 20px;
`;

export const IconPosition = styled.div`
  position: absolute;
  left: -20px;
`;

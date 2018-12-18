import styled, { css } from 'styled-components';
import {
  flex,
  mediaMedium,
  mediaMediumGreater,
  sideMargin,
  sidePosition,
} from 'utils/css/styles';
import {
  borderRadius,
  boxShadowBottomRight,
  boxShadowBottomRightLight,
} from 'utils/css/variables';
import { fuscousGray } from 'utils/css/colors';

export const desktopStyle = css`
  ${flex({ align: 'center', justify: 'center' })};
  border-top-left-radius: ${borderRadius};
  position: relative;
  background-color: white;
`;

export const mobileStyle = css`
  ${flex({ direction: 'column', align: 'flex-start' }, false)};
  border-radius: ${borderRadius};
  box-shadow: ${boxShadowBottomRight};
  background-color: white;
  padding: 20px 30px 25px 22px;
`;

export const StyledLogo = styled.div`
  ${flex({ align: 'center', justify: 'center', shrink: 0 })};
  height: 160px;
  width: 140px;
  position: relative;
  background-color: rgba(234, 234, 234, 1);
  border-radius: 8px 0 0 0px;
`;

const mobileLogoWidth = '48px';
export const StyledMobileLogo = styled.div`
  ${sideMargin('end', '10px')};

  width: ${mobileLogoWidth};
  height: ${mobileLogoWidth};
  flex-shrink: 0;
`;

export const StyledDetailsContainer = styled.div`
  ${flex({ align: 'center', justify: 'flex-start' })};
  width: 100%;

  ${mediaMediumGreater`
    height: 160px;
    padding: 20px 30px 20px 40px;
    box-shadow: ${boxShadowBottomRightLight};
  `};

  ${mediaMedium`
    ${flex({ align: 'flex-start' }, false)};
    margin: 10px 0 20px 0;
  `};
`;

export const StyledDetails = styled.div`
  ${flex({ align: 'flex-start', justify: 'flex-start', direction: 'column' })};

  ${mediaMediumGreater`
    height: 100%;
    max-width: calc(70% - 100px);
    flex-grow: 1;
  `};

  ${mediaMedium`width: 100%;`};
`;

export const deliveryInfoStyle = css`
  margin: 10px 0;

  ${mediaMediumGreater`margin: auto 0 0`};
`;

export const Name = styled.div`
  font-size: 35px;
  line-height: 1;

  ${mediaMediumGreater`
    position: relative;
    margin-bottom: 6px;
  `};
`;

export const RatingContainer = styled.div`
  ${flex({ align: 'center' })};
  color: ${fuscousGray};
  font-size: 12px;
  position: absolute;
  ${sidePosition('end', '-35px')};
  top: 5px;

  ${mediaMedium`
    top: 20px;
    ${sidePosition('end', '20px')};
  `};
`;

export const StyledCuisine = styled.div`
  ${flex({ align: 'center', justify: 'center' })};
  ${sideMargin('end', '20px')};
  margin-bottom: 7px;

  & > p {
    margin-top: 5px;
    ${sideMargin('start', '7px')};
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  position: absolute;

  ${mediaMediumGreater`
    ${sidePosition('end', '10px')};
    top: -40px;
  `};

  ${mediaMedium`
    ${sidePosition('start', '10px')};
    top: -70px;
  `};
`;

export const desktopOfferCss = css`
  position: absolute;
  ${sidePosition('end', '10px')};
  top: 10px;

  ${mediaMedium`display: none;`};
`;

import styled from 'styled-components';
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
import {
  alabaster,
  silverChalice,
  fuscousGray,
  errorBg,
  persimmon,
  jade,
} from 'utils/css/colors';

export const StyledRestaurantInfo = styled.div`
  ${flex({ align: 'center', justify: 'center' })};
  border-top-left-radius: ${borderRadius};
  position: relative;
  background-color: white;

  ${mediaMedium`
    ${flex({ direction: 'column', align: 'flex-start' }, false)};
    border-radius: ${borderRadius};
    padding-bottom: 30px;
    box-shadow: ${boxShadowBottomRight};
    padding: 20px 30px 25px 20px;
  `};
`;

export const StyledLogo = styled.div`
  ${flex({ align: 'center', justify: 'center', shrink: 0 })};
  height: 160px;
  width: 140px;
  position: relative;
  background-color: rgba(234, 234, 234, 1);
  border-radius: 8px 0 0 0px;

  ${mediaMedium`display: none;`};
`;

export const StyledMobileLogo = styled.div`
  ${sideMargin('end', '10px')};

  ${mediaMediumGreater`display: none;`};
`;

export const StyledDetailsContainer = styled.div`
  ${flex({ align: 'center', justify: 'flex-start' })};
  max-height: 160px;
  width: 100%;

  ${mediaMediumGreater`
    padding: 20px 30px 25px 40px;
    box-shadow: ${boxShadowBottomRightLight};
  `};

  ${mediaMedium`
    ${flex({ align: 'flex-start' }, false)};
    margin: 10px 0 20px 0;
  `};
`;

export const StyledDetails = styled.div`
  ${flex({ align: 'flex-start', justify: 'center', direction: 'column' })};

  ${mediaMediumGreater`height: 160px;`};
`;

export const Name = styled.div`
  font-size: 35px;
  line-height: 1;

  ${mediaMediumGreater`position: relative;`};
`;

export const RatingContainer = styled.div`
  ${flex({ align: 'center' })};
  color: ${fuscousGray};
  font-size: 12px;
  position: absolute;
  ${sidePosition('end', '-30px')};
  top: 5px;

  ${mediaMedium`
    top: 20px;
    right: 20px;
  `};
`;

export const StyledCuisine = styled.div`
  ${flex({ align: 'center', justify: 'center' })};
  ${sideMargin('end', '20px')};
  & > p {
    margin-top: 5px;
    ${sideMargin('start', '7px')};
  }
`;

export const StatusContainer = styled.div`
  display: flex;

  ${mediaMediumGreater`
    position: absolute;
    ${sidePosition('end', '10px')};
    top: 10px;
  `};
`;

export const StatusContent = styled.div`
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
  ${sideMargin('start', '5px')};
`;

import styled from 'styled-components';
import { flex, mediaMedium, mediaMediumGreater } from 'utils/css/styles';
import { borderRadius, boxShadow } from 'utils/css/variables';
import {
  persimmon,
  errorLight,
  jade,
  silverChalice,
  fuscousGray,
  alabaster,
} from 'utils/css/colors';

export const StyledRestaurantInfo = styled.div`
  ${flex({ align: 'center', justify: 'center' })};
  border-top-left-radius: ${borderRadius};
  position: relative;
  overflow: hidden;
  background-color: white;

  ${mediaMedium`
    border-radius: ${borderRadius};
    flex-direction: column;
    padding-bottom: 30px;
    box-shadow: ${boxShadow};
  `};
`;

export const StyledLogo = styled.div`
  ${flex({ align: 'center', justify: 'center' })};
  height: 160px;
  width: 140px;
  flex-shrink: 0;
  position: relative;
  background-color: rgba(234, 234, 234, 1);
  border-radius: 8px 0 0 0px;

  ${mediaMedium`display: none;`};
`;

export const StyledMobileLogo = styled.div`
  margin-right: 10px;

  ${mediaMediumGreater`display: none;`};
`;

export const StyledDetailsContainer = styled.div`
  ${flex({ align: 'center', justify: 'flex-start' })};
  max-height: 160px;
  width: 100%;
  padding: 20px 30px 25px 20px;

  ${mediaMedium`
    align-items: flex-start;
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

export const RatingContainer = styled.span`
  color: ${fuscousGray};
  font-size: 12px;
  position: absolute;
  right: -30px;
  top: 5px;

  ${mediaMedium`
    top: 20px;
    right: 20px;
  `};
`;

export const StyledCuisine = styled.div`
  ${flex({ align: 'center', justify: 'center' })};
  margin-right: 20px;

  & > p {
    margin-top: 5px;
    margin-left: 7px;
  }
`;

export const StatusContainer = styled.div`
  display: flex;

  ${mediaMediumGreater`
    position: absolute;
    right: 10px;
    top: 10px;
  `};
`;

export const Status = styled.div`
  padding: 8px 12px;
  border-radius: ${borderRadius};
  background-color: ${({ color }) => {
    if (color === 'error') return errorLight;
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

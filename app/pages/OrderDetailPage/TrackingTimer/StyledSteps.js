import styled from 'styled-components';
import OvalImage from 'images/oval.svg';
import { dustyGray } from 'utils/css/colors';
import { fontFamilyLight } from 'utils/css/variables';

export const StyledWrapper = styled.div`
  position: relative;
  width: 73px;
  height: 73px;
  background-image: url(${OvalImage});
`;
export const StyledMinuteLabel = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${dustyGray};
  transform: translate(-50%, 0%);
  font-family: ${fontFamilyLight};
  font-size: 14px;
`;

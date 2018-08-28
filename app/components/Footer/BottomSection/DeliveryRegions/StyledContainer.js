import styled from 'styled-components';
import { mediaMedium } from 'utils/styles';

import StyledSection from '../StyledSection';

const StyledContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  ${StyledSection} && {
    ${mediaMedium`
      display: none;
    `};
  }
`;

export default StyledContainer;

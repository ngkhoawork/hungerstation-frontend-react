import styled from 'styled-components';
import { mediaMedium } from 'utils/css/styles';

import StyledSection from '../StyledSection';

const StyledContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  ${StyledSection} && {
    ${mediaMedium`
      display: none;
    `};
  }
`;

export default StyledContainer;
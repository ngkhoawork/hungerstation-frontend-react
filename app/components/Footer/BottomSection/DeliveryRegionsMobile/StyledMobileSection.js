import styled from 'styled-components';
import { flexBox, mediaGreater } from 'utils/css/styles';

import StyledSection from '../StyledSection';

const StyledMobileSection = styled.div`
  ${flexBox({
    align: 'flex-start',
    justify: 'flex-start',
    direction: 'column',
  })};
  width: 100%;

  ${StyledSection} && {
    ${mediaGreater(850)`
      display: none;
    `};
  }
`;

export default StyledMobileSection;

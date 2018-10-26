import styled from 'styled-components';
import { mediaMedium } from 'utils/css/styles';

const StyledContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  ${mediaMedium`
    justify-content: flex-start;
  `};
`;

export default StyledContainer;

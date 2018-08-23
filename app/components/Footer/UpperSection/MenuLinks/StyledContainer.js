import styled from 'styled-components';
import { mediaMedium } from 'utils/styles';

const StyledContainer = styled.div`
  display: flex;
  flex: 0.7;
  justify-content: space-between;
  ${mediaMedium`
    flex-wrap: wrap;
    margin-bottom: 20px;
  `};
`;

export default StyledContainer;

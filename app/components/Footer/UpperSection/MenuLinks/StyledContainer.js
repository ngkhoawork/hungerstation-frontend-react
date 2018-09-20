import styled from 'styled-components';
import { mediaMedium, mediaLess } from 'utils/css/styles';

const StyledContainer = styled.div`
  display: flex;
  flex: 0.9;
  justify-content: space-between;
  ${mediaLess(1080)`
    flex-wrap: wrap;
  `};
  ${mediaMedium`
    margin-bottom: 20px;
  `};
`;

export default StyledContainer;

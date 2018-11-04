import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/css/styles';

const StyledContainer = styled.div`
  margin: 0 12px;
  ${flexBox({ align: 'center', justify: 'flex-end' })};

  ${mediaMedium`
    justify-content: center;
    margin-bottom: 20px;
  `};
`;

export default StyledContainer;

import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/css/styles';

const StyledContainer = styled.div`
  ${flexBox({ align: 'center', justify: 'space-between' }, `width: 100%;`)};
  ${mediaMedium`
    justify-content: center;
    margin-bottom: 20px;
  `};
`;

export default StyledContainer;

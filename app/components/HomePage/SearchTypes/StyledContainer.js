import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/styles';

const StyledContainer = styled.div`
  ${flexBox({ align: 'center', justify: 'space-between' }, `width: 100%;`)};
  ${mediaMedium`
    justify-content: center;
  `};
`;

export default StyledContainer;

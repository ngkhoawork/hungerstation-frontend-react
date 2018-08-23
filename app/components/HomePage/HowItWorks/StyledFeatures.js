import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/styles';

const StyledFeatures = styled.div`
  ${flexBox({ justify: 'center' }, `margin-top: 70px;`)};
  ${mediaMedium`
    flex-direction: column;
  `};
`;

export default StyledFeatures;

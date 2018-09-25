import styled from 'styled-components';
import { flexBox, mediaMedium, mediaSmall } from 'utils/css/styles';

const StyledFeatures = styled.div`
  ${flexBox({ justify: 'space-between' }, `margin: 0 10% 20px`)};
  ${mediaMedium`
    flex-direction: column;
  `};
  ${mediaSmall`
    margin: 0 20px;
  `};
`;

export default StyledFeatures;

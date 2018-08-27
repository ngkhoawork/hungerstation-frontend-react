import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/styles';

const StyledFeatures = styled.div`
  ${flexBox({ justify: 'space-between' }, `margin: 0 10% 20px`)};
  ${mediaMedium`
    flex-direction: column;
  `};
`;

export default StyledFeatures;

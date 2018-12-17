import styled from 'styled-components';
import { flex, mediaMedium, mediaSmall } from 'utils/css/styles';

const StyledFeatures = styled.div`
  ${flex({ justify: 'space-between' })};
  margin: 55px 7% 20px 20%;

  ${mediaMedium`
    ${flex({ align: 'center', direction: 'column' }, false)};
  `};

  ${mediaSmall`
    margin: 0 20px;
  `};
`;

export default StyledFeatures;

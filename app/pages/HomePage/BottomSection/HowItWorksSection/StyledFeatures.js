import styled from 'styled-components';
import { flex, mediaMedium, mediaSmall } from 'utils/css/styles';

const StyledFeatures = styled.div`
  ${flex({ justify: 'space-between' })};
  margin: 0 15% 20px;

  ${mediaMedium`
    ${flex({ align: 'center', direction: 'column' }, false)};
  `};

  ${mediaSmall`
    margin: 0 20px;
  `};
`;

export default StyledFeatures;

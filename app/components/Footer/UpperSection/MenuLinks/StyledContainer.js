import styled from 'styled-components';
import { flex, mediaMedium, mediaLess } from 'utils/css/styles';

const StyledContainer = styled.div`
  ${flex({ grow: 0.2, justify: 'space-between' })};

  ${mediaLess(1080)`
    ${flex({ wrap: 'wrap' }, false)};
  `};

  ${mediaMedium`
    margin-bottom: 20px;
  `};
`;

export default StyledContainer;

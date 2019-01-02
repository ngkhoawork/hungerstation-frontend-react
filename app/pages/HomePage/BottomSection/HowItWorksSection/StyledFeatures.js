import styled from 'styled-components';
import { flex, mediaMedium, mediaSmall, sideMargin } from 'utils/css/styles';

const StyledFeatures = styled.div`
  ${flex({ justify: 'space-between' })};
  margin-top: 55px;
  margin-bottom: 20px;
  ${sideMargin('start', '20%')};
  ${sideMargin('end', '7%')};

  ${mediaMedium`
    ${flex({ align: 'center', direction: 'column' }, false)};
  `};

  ${mediaSmall`
    margin: 0 20px;
  `};
`;

export default StyledFeatures;

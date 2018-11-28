import styled from 'styled-components';

import { flex, mediaMedium, sideMargin, mediaSmall } from 'utils/css/styles';

const StyledFeature = styled.div`
  ${flex({}, true)};
  width: 224px;
  max-width: 224px;
  position: relative;

  ${mediaMedium`
    flex: 1;
    margin-top: 0;
    margin-bottom: 20px;
    ${sideMargin('start', '20px')};
    ${sideMargin('end', '0px')};
  `};

  ${mediaSmall`
    margin: 0;
    ${sideMargin('start', '72px')};
  `};
`;

export const StyledFeatureIcon = styled.div`
  position: absolute;
  top: -6px;
  ${sideMargin('start', ' -68px')};
  z-index: 100;
`;

export default StyledFeature;

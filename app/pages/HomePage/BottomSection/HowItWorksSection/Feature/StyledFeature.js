import styled from 'styled-components';
import { flex, mediaMedium, mediaSmall } from 'utils/css/styles';

const StyledFeature = styled.span`
  ${flex()};
  width: 224px;
  max-width: 224px;
  position: relative;
  margin-right: 192px;

  &:last-child {
    margin-right: 0;
  }

  ${mediaMedium`
    flex: 1;
    margin: 0 35px 0px 20px;
    margin-right: 0px;
  `};

  ${mediaSmall`
    margin: 0 0 0 72px;
  `};
`;

export const StyledFeatureIcon = styled.div`
  position: absolute;
  top: -6px;
  left: -68px;
  z-index: 100;
`;

export default StyledFeature;

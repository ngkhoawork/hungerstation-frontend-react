import styled from 'styled-components';
import { flexBox, mediaMedium, mediaSmall } from 'utils/css/styles';

const StyledFeature = styled.span`
  ${flexBox(
    {},
    `
    width: 224px;
    max-width: 224px;
    position: relative;
    margin-right: 192px;

  `,
  )};
  ${mediaMedium`
    flex: 1;
    margin: 0 35px 0px 20px;
    margin-right: 0px;
  `};
  ${mediaSmall`
  margin: 0 0 0 72px;
  `};

  &:last-child {
    margin-right: 0;
  }
`;

export const StyledFeatureIcon = styled.div`
  position: absolute;
  top: -6px;
  left: -68px;
  z-index: 100;
`;

export default StyledFeature;

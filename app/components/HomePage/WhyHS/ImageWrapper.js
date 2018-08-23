import styled from 'styled-components';
import { mediaMedium } from 'utils/styles';

const ImageWrapper = styled.div`
  position: absolute;
  left: 90;
  ${mediaMedium`
    display: none;
  `};
`;

export default ImageWrapper;

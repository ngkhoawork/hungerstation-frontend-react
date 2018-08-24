import styled from 'styled-components';
import { mediaMedium } from 'utils/styles';

const ImageWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  left: 10px;
  z-index: 0;
  ${mediaMedium`
    display: none;
  `};
`;

export default ImageWrapper;

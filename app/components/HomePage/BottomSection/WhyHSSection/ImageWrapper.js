import styled from 'styled-components';
import { mediaSmall } from 'utils/styles';

const ImageWrapper = styled.div`
  position: absolute;
  left: 10%;
  top: -30px;
  z-index: 0;
  ${mediaSmall`
    top: -80px;
  `};
`;

export default ImageWrapper;

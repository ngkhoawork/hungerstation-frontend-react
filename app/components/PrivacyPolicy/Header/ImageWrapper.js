import styled from 'styled-components';
import { mediaSmall, mediaMedium } from 'utils/css/styles';

const ImageWrapper = styled.div`
  width: 440px;

  ${mediaSmall`
    width: auto;
  `};

  ${mediaMedium`
    width: 350px;
    padding-left: 10px
`};
`;

export default ImageWrapper;

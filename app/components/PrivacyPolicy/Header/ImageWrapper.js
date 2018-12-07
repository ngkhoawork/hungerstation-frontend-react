import styled from 'styled-components';
import { mediaSmall, mediaMedium, sidePadding } from 'utils/css/styles';

const ImageWrapper = styled.div`
  width: 440px;

  ${mediaSmall`
    width: auto;
  `};

  ${mediaMedium`
    width: 350px;
    ${sidePadding('start', '10px')};
`};
`;

export default ImageWrapper;

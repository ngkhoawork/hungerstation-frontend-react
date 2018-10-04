import styled from 'styled-components';
import { mediaSmall } from 'utils/css/styles';

const ImageWrapper = styled.div`
  width: 740px;

  ${mediaSmall`
    width: auto;
  `};
`;

export default ImageWrapper;

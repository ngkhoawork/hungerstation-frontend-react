import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/styles';

const ImageGroup = styled.div`
  ${flexBox({
    align: 'flex-end',
    direction: 'column',
    justify: 'space-around',
  })};
  ${mediaMedium`
    display: none;
  `};
`;

export default ImageGroup;

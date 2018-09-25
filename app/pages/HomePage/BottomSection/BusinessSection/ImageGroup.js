import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';

const ImageGroup = styled.div`
  ${flexBox({
    align: 'flex-end',
    direction: 'column',
    justify: 'space-around',
  })};
`;

export default ImageGroup;

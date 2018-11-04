import styled from 'styled-components';
import { flex } from 'utils/css/styles';

const ImageGroup = styled.div`
  ${flex({
    align: 'flex-end',
    direction: 'column',
    justify: 'space-around',
  })};
`;

export default ImageGroup;

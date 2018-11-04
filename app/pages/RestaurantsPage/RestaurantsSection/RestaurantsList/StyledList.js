import styled from 'styled-components';
import { flex, mediaLess } from 'utils/css/styles';

const StyledList = styled.div`
  width: 912px;
  ${flex({ align: 'flex-start', wrap: 'wrap' })};

  ${mediaLess(600)`
    ${flex({ direction: 'column', align: 'center' }, false)};
    width: 100%;
`};
`;

export default StyledList;

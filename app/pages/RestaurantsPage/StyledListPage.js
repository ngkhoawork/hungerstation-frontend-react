import styled from 'styled-components';
import { flex, mediaLess } from 'utils/css/styles';

const StyledListPage = styled.div`
  ${flex({ align: 'flex-start', justify: 'space-between' })};
  width: 100%;
  background-color: #ffffff;

  ${mediaLess(600)`
    padding: 0;
  `};
`;

export default StyledListPage;

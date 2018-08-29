import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledListPage = styled.div`
  ${flexBox(
    { align: 'center' },
    `
    width: 100%;
    padding: 20px 112px;
  `,
  )};
`;

export default StyledListPage;

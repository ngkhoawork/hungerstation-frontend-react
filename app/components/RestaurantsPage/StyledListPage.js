import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledListPage = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'space-between' },
    `
    width: 100%;
    padding: 20px 56px;
  `,
  )};
`;

export default StyledListPage;

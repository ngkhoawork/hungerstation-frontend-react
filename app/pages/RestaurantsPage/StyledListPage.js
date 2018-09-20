import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';

const StyledListPage = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'space-between' },
    `
    width: 100%;
    padding: 20px 56px;
  `,
  )};
  ${mediaLess(1250)`
    padding: 20px 20px 20px 30px;
  `};
  ${mediaLess(600)`
    padding: 0;
  `};
`;

export default StyledListPage;

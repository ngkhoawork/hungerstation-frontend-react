import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';

const StyledListPage = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'space-between' },
    `
    width: 100%;
    background-color: #ffffff;
  `,
  )};
  ${mediaLess(1250)`
  `};
  ${mediaLess(600)`
    padding: 0;
  `};
`;

export default StyledListPage;

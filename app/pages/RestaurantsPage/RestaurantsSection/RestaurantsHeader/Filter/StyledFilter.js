import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';

const StyledFilter = styled.div`
  ${flexBox(
    { align: 'flex-start', direction: 'column' },
    `
    line-height: 15px;
  `,
  )};
  ${mediaLess(860)`
    display: none;
  `};
`;

export default StyledFilter;

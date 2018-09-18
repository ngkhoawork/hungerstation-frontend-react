import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledFilter = styled.div`
  ${flexBox(
    { align: 'flex-start', direction: 'column' },
    `
    line-height: 15px;
  `,
  )};
`;

export default StyledFilter;

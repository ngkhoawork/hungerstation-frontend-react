import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledTitle = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    margin-bottom: 17px;
  `,
  )};
`;

export default StyledTitle;

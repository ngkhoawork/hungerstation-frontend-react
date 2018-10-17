import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';

const StyledTitle = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    width: 100%;
    margin-bottom: 17px;
  `,
  )};
`;

export default StyledTitle;
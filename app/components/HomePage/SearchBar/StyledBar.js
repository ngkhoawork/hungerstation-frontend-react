import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledBar = styled.span`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    border: 1px solid lightgrey;
    border-radius: 8px;
    margin: 15px 0;
    height: 56px;
  `,
  )};
`;

export default StyledBar;

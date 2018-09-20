import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';

const StyledInput = styled.input`
  ${flexBox(
    { align: 'flex-end', justify: 'center' },
    `
    line-height: 40px;
    width: 100%;
    font-size: 14px;
    font-family: 'HungerStation-Light', sans-serif;
    text-align: right;
  `,
  )};
`;

export default StyledInput;

import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledDropdown = styled.span`
  ${flexBox(
    { align: 'center', justify: 'flex-start' },
    `
  height: 100%;
  width: 35%;
  cursor: pointer;
  &:first-of-type {
    margin-left: 20px;
  }
  `,
  )};
`;

export default StyledDropdown;

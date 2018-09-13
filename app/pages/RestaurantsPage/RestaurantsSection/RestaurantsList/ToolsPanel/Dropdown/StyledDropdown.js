import styled from 'styled-components';
import { flexBox } from 'utils/styles';
import { wildSant } from 'utils/colors';

const StyledDropdown = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    background-color: ${wildSant};
    height: 40px;
    border-radius: 8px;
    padding: 0 10px;
    width: 100%;
  `,
  )};
`;

export default StyledDropdown;

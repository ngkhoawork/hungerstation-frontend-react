import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';
import { wildSand } from 'utils/css/colors';

const StyledDropdown = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    background-color: ${wildSand};
    height: 40px;
    border-radius: 8px;
    padding: 0 10px;
    width: 100%;
  `,
  )};
`;

export default StyledDropdown;

import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';
import { wildSand } from 'utils/css/colors';

const StyledHeader = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    width: 100%;
    padding-bottom: 20px;
    margin-top: 5px;
    border-bottom: 1px solid ${wildSand};
  `,
  )};
`;

export default StyledHeader;

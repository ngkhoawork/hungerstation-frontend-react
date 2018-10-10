import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';
import { wildSand } from 'utils/css/colors';

const StyledSelect = styled.div`
  ${flexBox(
    { direction: 'column' },
    `
    background-color: white;
    max-height: 220px;
    width: 100%;
    overflow-y: scroll;
    position: absolute;
    z-index: 1000;
    background-color: ${wildSand};
    border-radius: 8px;
  `,
  )};
`;

export default StyledSelect;

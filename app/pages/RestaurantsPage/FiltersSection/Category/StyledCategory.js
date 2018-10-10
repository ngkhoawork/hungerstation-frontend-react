import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';
import { wildSand } from 'utils/css/colors';

const StyledCategory = styled.div`
  ${flexBox(
    { align: 'flex-start', direction: 'column' },
    `
    width: 100%;
    margin: 20px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid ${wildSand};
  `,
  )};
  &:last-of-type {
    border-bottom: 0;
  }
`;

export default StyledCategory;

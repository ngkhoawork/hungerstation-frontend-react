import styled from 'styled-components';
import { flexBox } from 'utils/styles';
import { wildSant } from 'utils/colors';

const StyledItem = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    width: 100%;
    padding: 15px 0;
  `,
  )};
  border-bottom: ${({ hasBorder }) =>
    hasBorder ? `1px solid ${wildSant}` : 'none'};
  &:last-of-type {
    border: 0;
  }
`;

export default StyledItem;

import styled from 'styled-components';
import { flexBox } from 'utils/styles';
import { wildSant } from 'utils/colors';

const StyledFiltersSection = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'center', direction: 'column' },
    `
    flex: 0.25;
    padding: 10px 20px;
    border-radius: 8px;
    background-color: ${wildSant};
  `,
  )};
`;

export default StyledFiltersSection;

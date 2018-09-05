import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/styles';

const StyledFiltersSection = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'center', direction: 'column' },
    `
    flex: 0.18;
    padding: 10px 20px;
    border-radius: 8px;
  `,
  )};
  ${mediaLess(1000)`
    display: none;
  `};
`;

export default StyledFiltersSection;

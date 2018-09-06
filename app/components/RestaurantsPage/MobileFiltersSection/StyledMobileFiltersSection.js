import styled from 'styled-components';
import { flexBox, mediaGreater } from 'utils/styles';

const StyledMobileFiltersSection = styled.div`
  ${flexBox(
    { align: 'center', direction: 'column' },
    `
    padding-right: 20px;
    width: 100%;
  `,
  )};
  ${mediaGreater(1000)`
    display: none;
  `};
`;

export default StyledMobileFiltersSection;

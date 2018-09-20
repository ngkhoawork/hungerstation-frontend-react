import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';

const FiltersWrapper = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'center', direction: 'column' },
    `
    flex: 0.18;
    padding: 10px 20px;
  `,
  )};
  ${mediaLess(1000)`
    display: none;
  `};
`;

export default FiltersWrapper;

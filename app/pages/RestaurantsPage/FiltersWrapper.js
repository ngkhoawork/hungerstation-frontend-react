import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';

const FiltersWrapper = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'center', direction: 'column' },
    `
    padding: 10px 20px;
    width: 186px;
  `,
  )};
  ${mediaLess(1000)`
    display: none;
  `};
`;

export default FiltersWrapper;

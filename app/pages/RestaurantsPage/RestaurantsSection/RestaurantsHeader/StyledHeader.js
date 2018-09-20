import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';

const StyledHeader = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `width: 100%; margin-bottom: 10px;`,
  )};
  ${mediaLess(860)`
    justify-content: flex-start;
  `};
  ${mediaLess(600)`
    align-items: flex-start;
    flex-direction: column;
  `};
`;

export default StyledHeader;

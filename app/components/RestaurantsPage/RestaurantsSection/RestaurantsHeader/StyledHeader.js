import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledHeader = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `width: 100%; margin-bottom: 10px;`,
  )};
`;

export default StyledHeader;

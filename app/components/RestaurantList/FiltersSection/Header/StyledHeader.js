import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledHeader = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid white;
  `,
  )};
`;

export default StyledHeader;

import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledContainer = styled.span`
  ${flexBox(
    { align: 'center' },
    `padding: 0 20px;
  cursor: pointer;`,
  )};
`;

export default StyledContainer;

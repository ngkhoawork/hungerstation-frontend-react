import styled from 'styled-components';
import { gold } from 'utils/colors';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: ${({ width }) => width}px;
  border-radius: 8px;
  background-color: ${gold};
`;

export default StyledButton;

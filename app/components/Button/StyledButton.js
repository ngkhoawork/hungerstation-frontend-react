import styled from 'styled-components';
import { candlelight } from 'utils/colors';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${candlelight};
  padding: 0 50px;
  border-bottom-right-radius: inherit;
  border-top-right-radius: inherit;
  cursor: pointer;
`;

export default StyledButton;

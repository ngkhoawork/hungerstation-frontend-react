import styled from 'styled-components';
import { candlelight } from 'utils/colors';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${candlelight};
  padding: 7px 35px;
  cursor: pointer;
`;

export default StyledButton;

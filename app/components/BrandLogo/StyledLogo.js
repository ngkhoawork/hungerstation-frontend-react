import styled from 'styled-components';
import { boxShadow } from 'utils/css/variables';

const StyledLogo = styled.img`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  padding: 5px;
  border-radius: 50%;
  background-color: white;
  margin-right: ${({ isWithMargin }) => (isWithMargin ? '20px' : 0)};
  box-shadow: ${boxShadow};
`;

export default StyledLogo;

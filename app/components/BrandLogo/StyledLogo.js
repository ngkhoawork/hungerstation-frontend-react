import styled from 'styled-components';

const StyledLogo = styled.img`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  padding: 5px;
  border-radius: 50%;
  background-color: white;
  margin-right: ${({ isWithMargin }) => (isWithMargin ? '20px' : 0)};
`;

export default StyledLogo;

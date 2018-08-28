import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-family: 'HungerStation-${({ light }) =>
    light ? 'Light' : 'Regular'}', sans-serif;
  font-size: ${({ size }) => (size === 'small' ? 14 : 20)}px;
  color: ${({ color }) => color};
  margin: 0;
`;

export default StyledParagraph;

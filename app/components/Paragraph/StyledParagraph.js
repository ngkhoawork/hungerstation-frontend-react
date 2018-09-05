import styled from 'styled-components';

const sizesMap = {
  small: '14px',
  medium: '16px',
  large: '20px',
};

const StyledParagraph = styled.p`
  font-family: ${({ light }) =>
    `HungerStation-${light ? 'Light' : 'Regular'}, sans-serif`};
  font-size: ${({ size }) => sizesMap[size] || sizesMap.small};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin || 0};
`;

export default StyledParagraph;

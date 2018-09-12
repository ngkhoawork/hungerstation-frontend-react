import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-family: 'HungerStation-\${({ light }) => light ? ' Light ' : ' Regular
      '}',
    sans-serif;
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin || 0};
  margin-top: 3px;
`;

export default StyledParagraph;

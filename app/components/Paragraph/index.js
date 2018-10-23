import styled from 'styled-components';
import { fuscousGray } from 'utils/css/colors';

const StyledParagraph = styled.p`
  font-family: ${({ light }) =>
    `HungerStation-${light ? 'Light' : 'Regular'}, sans-serif`};
  font-size: ${({ size }) => (size ? `${size}px` : '14px')};
  color: ${({ color }) => color || fuscousGray};
  margin-top: 3px;
  margin: ${({ margin }) => margin || 0};
`;

export default StyledParagraph;

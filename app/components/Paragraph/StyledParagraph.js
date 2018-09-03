import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-family: ${props =>
    `${
      props.light ? 'HungerStation-Light' : 'HungerStation-Regular'
    }, sans-serif`};
  font-size: ${({ size }) => (size === 'small' ? 14 : 20)}px;
  color: ${({ color }) => color};
  margin: 0;
`;

export default StyledParagraph;

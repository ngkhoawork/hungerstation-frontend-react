import styled from 'styled-components';
import { fuscousGray } from 'utils/css/colors';

const Text = styled.p`
  color: ${fuscousGray};
  font-size: ${({ fontSize }) => fontSize}px;
  font-family: 'HungerStation-Regular', sans-serif;
  margin: 0;
`;

export default Text;

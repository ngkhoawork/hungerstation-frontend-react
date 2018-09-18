import styled from 'styled-components';
import { jade, alto } from 'utils/colors';

const Dot = styled.div`
  background-color: ${({ active }) => (active ? jade : alto)};
  width: 7px;
  height: 7px;
  border-radius: 3.5px;
  margin-left: 3px;
  cursor: pointer;
`;

export default Dot;

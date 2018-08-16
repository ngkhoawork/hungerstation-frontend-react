import styled from 'styled-components';
import { candlelight } from 'utils/colors';

const ActiveBorder = styled.span`
  border: 2px solid ${candlelight};
  border-radius: 10px;
  width: 50%;
  height: 0;
`;

export default ActiveBorder;

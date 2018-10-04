import styled from 'styled-components';
import { gold } from 'utils/css/colors';

const ActiveBorder = styled.span`
  border: 1px solid
    ${({ variant }) => (variant === 'gold' ? 'white' : `${gold}`)};
  border-radius: 10px;
  width: 70%;
  height: 0;
`;

export default ActiveBorder;

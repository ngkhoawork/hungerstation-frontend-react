import styled from 'styled-components';
import { wildSant } from 'utils/css/colors';
import { flexBox } from 'utils/css/styles';

const StyledAction = styled.div`
  ${flexBox({ align: 'center' })} padding-top: 20px;
  border-top: 1px solid ${wildSant};
  width: 100%;
  cursor: pointer;
  img {
    margin: 0 0 3px 10px;
    transform: rotate(${({ isExpanded }) => (isExpanded ? 180 : 0)}deg);
  }
`;

export default StyledAction;

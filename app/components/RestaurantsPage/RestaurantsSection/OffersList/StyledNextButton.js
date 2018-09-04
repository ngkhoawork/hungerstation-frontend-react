import styled from 'styled-components';
import { gold } from 'utils/colors';
import { flexBox } from 'utils/styles';

const StyledNextButton = styled.div`
  ${flexBox({ align: 'center', justify: 'center' })} position: absolute;
  top: 135px;
  right: -15px;
  cursor: pointer;
  background-color: ${gold};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 20px 0 rgba(126, 125, 125, 0.15);
`;

export default StyledNextButton;

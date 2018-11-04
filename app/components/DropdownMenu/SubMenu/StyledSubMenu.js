import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';

const StyledSelect = styled.div`
  background-color: white;
  max-height: 220px;
  width: 200px;
  overflow-y: scroll;
  position: absolute;
  z-index: 1000;
  border-radius: 8px;
  ${flexBox({ direction: 'column' })};
`;

export default StyledSelect;

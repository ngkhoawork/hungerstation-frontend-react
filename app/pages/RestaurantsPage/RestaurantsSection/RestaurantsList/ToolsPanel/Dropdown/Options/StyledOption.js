import styled from 'styled-components';
import { gold } from 'utils/colors';

const StyledOption = styled.div`
  line-height: 40px;
  padding: 0 10px;
  &:hover {
    background-color: ${gold};
  }
  border-radius: 8px;
`;

export default StyledOption;

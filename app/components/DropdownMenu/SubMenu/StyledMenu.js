import styled from 'styled-components';
import { gold, wildSand } from 'utils/css/colors';

const StyledOption = styled.div`
  display: flex;
  align-items: center;
  line-height: 36px;
  padding: 0 10px;
  border-bottom: 1px solid ${wildSand};
  &:hover {
    background-color: ${gold};
  }

  p {
    margin-left: 15px;
  }
`;

export default StyledOption;

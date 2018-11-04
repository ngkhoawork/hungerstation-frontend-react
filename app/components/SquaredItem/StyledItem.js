import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';

const StyledItem = styled.div`
  ${flexBox({ align: 'center', justify: 'center' })};
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  & > p {
    z-index: 5;
  }
`;

export default StyledItem;

import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledItem = styled.div`
  ${flexBox(
    { align: 'center', justify: 'center' },
    `
    position: relative;
  `,
  )};
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  & > p {
    z-index: 5;
  }
`;

export default StyledItem;

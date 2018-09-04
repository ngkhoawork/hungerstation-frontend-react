import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledToolPanel = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    width: 100%;
  `,
  )};
`;

export default StyledToolPanel;

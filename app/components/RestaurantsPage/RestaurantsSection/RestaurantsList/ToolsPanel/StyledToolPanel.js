import styled from 'styled-components';
import { flexBox } from 'utils/styles';
import { wildSant } from 'utils/colors';

const StyledToolPanel = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    width: 100%;
    padding-top: 20px;
    margin-bottom: 50px;
    border-top: 1px solid ${wildSant};
  `,
  )};
`;

export default StyledToolPanel;

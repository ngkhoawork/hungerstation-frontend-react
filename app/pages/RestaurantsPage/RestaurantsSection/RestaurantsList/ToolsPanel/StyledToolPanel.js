import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';
import { wildSand } from 'utils/css/colors';

const StyledToolPanel = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    width: 100%;
    padding-top: 20px;
    margin-bottom: 50px;
    border-top: 1px solid ${wildSand};
  `,
  )};
  ${mediaLess(600)`
    margin-bottom: 10px;
  `};
`;

export default StyledToolPanel;

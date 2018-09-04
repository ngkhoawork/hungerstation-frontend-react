import styled from 'styled-components';
import { flexBox } from 'utils/styles';
import { wildSant } from 'utils/colors';

const StyledHeader = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    width: 100%;
    padding-bottom: 20px;
    margin-top: 5px;
    border-bottom: 1px solid ${wildSant};
  `,
  )};
`;

export default StyledHeader;

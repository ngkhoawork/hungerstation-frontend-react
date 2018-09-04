import styled from 'styled-components';
import { flexBox } from 'utils/styles';
import { wildSant } from 'utils/colors';

const StyledDetails = styled.div`
  ${flexBox({ align: 'flex-end', justify: 'space-between' })};
  div > img {
    margin-right: 15px;
    margin-bottom: 3px;
    background-color: ${wildSant};
    width: 24px;
    height: 24px;
    border-radius: 12px;
    padding: 6px;
  }
`;

export default StyledDetails;

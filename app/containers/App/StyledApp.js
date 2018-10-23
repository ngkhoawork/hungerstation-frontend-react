import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';
import { alabaster } from 'utils/css/colors';

const StyledApp = styled.div`
  ${flexBox({
    align: 'center',
    direction: 'column',
    justify: 'flex-start',
  })};
  background-color: ${({ dark }) => (dark ? alabaster : 'white')};
  font-family: 'HungerStation-Regular', sans-serif;
`;

export default StyledApp;

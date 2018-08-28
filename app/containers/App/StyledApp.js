import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledApp = styled.div`
  ${flexBox({
    align: 'center',
    direction: 'column',
    justify: 'flex-start',
  })};
  background-color: white;
  font-family: 'HungerStation-Regular', sans-serif;
`;

export default StyledApp;

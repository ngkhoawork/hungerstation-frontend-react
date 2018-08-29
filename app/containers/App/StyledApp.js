import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledApp = styled.div`
  ${flexBox({
    align: 'center',
    direction: 'column',
    justify: 'flex-start',
  })};
  background-color: ${props => (props.dark ? '#f7f7f7' : '#ffffff')};
  font-family: 'HungerStation-Regular', sans-serif;
`;

export default StyledApp;

import styled from 'styled-components';
import { flexBox, mediaSmall } from 'utils/styles';

const StyledPage = styled.div`
  ${flexBox({
    align: 'center',
    direction: 'column',
    justify: 'flex-start',
  })};

  font-family: 'HungerStation-Regular', sans-serif;
  padding: 57px;
  background-color: #fff;
  border-radius: 8px;
  width: 50%;

  ${mediaSmall`
    padding: 0 10px;
    width: 95%;
    padding: 50px 10px;
  `};
`;

export default StyledPage;

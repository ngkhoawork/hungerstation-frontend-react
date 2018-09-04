import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledDetails = styled.div`
  ${flexBox({ align: 'flex-end', justify: 'space-between' })};
  div > img {
    margin-right: 15px;
    margin-bottom: 3px;
  }
`;

export default StyledDetails;

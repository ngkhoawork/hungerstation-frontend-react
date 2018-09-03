import styled from 'styled-components';
import { flexBox } from 'utils/styles';
import Desert from 'images/desert.png';

const StyledOfferItem = styled.div`
  ${flexBox({ justify: 'space-between', direction: 'column' })} width: 350px;
  height: 180px;
  border-radius: 8px;
  margin-right: 20px;
  background-image: url(${Desert});
  background-position: center;
  padding: 15px;
`;

export default StyledOfferItem;

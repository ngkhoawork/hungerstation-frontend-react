import styled from 'styled-components';
import { ironsideGray } from 'utils/css/colors';
import { mediaLess } from 'utils/css/styles';

const DeliveryCity = styled.span`
  font-size: 16px;
  color: ${ironsideGray};
  letter-spacing: 0.62px;
  line-height: 17px;
  ${mediaLess(950)`
    display: none;
  `};
`;
export default DeliveryCity;

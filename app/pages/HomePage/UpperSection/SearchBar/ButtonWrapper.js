import styled from 'styled-components';
import { mediaMedium } from 'utils/css/styles';

const ButtonWrapper = styled.div`
  width: 144px;
  height: 40px;
  ${mediaMedium`
    width: 100%;
    height: 56px;
  `};
`;

export default ButtonWrapper;

import styled from 'styled-components';
import { mediaLess } from 'utils/css/styles';

const ButtonWrapper = styled.div`
  width: 288px;
  height: 40px;
  align-self: center;
  margin-top: 10px;
  ${mediaLess(600)`
    align-self: flex-start;
    width: 240px;
  `};
`;

export default ButtonWrapper;

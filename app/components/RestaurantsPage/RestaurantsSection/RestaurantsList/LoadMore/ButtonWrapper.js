import styled from 'styled-components';
import { mediaLess } from 'utils/styles';

const ButtonWrapper = styled.div`
  width: 260px;
  height: 40px;
  align-self: center;
  margin-top: 10px;
  ${mediaLess(600)`
    align-self: flex-start;
    width: 240px;
  `};
`;

export default ButtonWrapper;

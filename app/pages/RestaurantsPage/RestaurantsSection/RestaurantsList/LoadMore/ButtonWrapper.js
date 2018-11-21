import styled from 'styled-components';
import { flex, mediaLess } from 'utils/css/styles';

const ButtonWrapper = styled.div`
  ${flex({ justify: 'flex-end' })};
  width: 288px;
  height: 40px;
  align-self: center;

  ${mediaLess(600)`
    align-self: flex-start;
    width: 240px;
  `};
`;

export default ButtonWrapper;

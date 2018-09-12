import styled from 'styled-components';
import { mediaLess, mediaGreater, getDisplayProp } from 'utils/styles';

const ButtonWrapper = styled.div`
  height: 45px;
  width: 100%;
  ${mediaGreater(1000)`
    display: none;
  `} ${mediaLess(1000)`
    ${({ isModalOpened }) => getDisplayProp(isModalOpened)};
  `};
`;

export default ButtonWrapper;

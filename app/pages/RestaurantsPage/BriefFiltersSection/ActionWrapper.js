import styled from 'styled-components';
import { mediaLess, getDisplayProp } from 'utils/css/styles';

const ActionWrapper = styled.div`
  ${mediaLess(1000)`
    ${({ isModalOpened }) => getDisplayProp(isModalOpened)};
  `};
`;

export default ActionWrapper;

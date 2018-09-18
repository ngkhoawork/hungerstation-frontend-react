import styled from 'styled-components';
import { mediaLess, getDisplayProp } from 'utils/styles';

const GroupWrapper = styled.div`
  ${mediaLess(1000)`
    ${({ isModalOpened }) => getDisplayProp(!isModalOpened)};
  `};
`;

export default GroupWrapper;

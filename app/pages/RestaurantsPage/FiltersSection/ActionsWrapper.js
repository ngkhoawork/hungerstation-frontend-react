import styled from 'styled-components';
import {
  mediaLess,
  mediaGreater,
  getDisplayProp,
  flexBox,
} from 'utils/css/styles';
import { alto } from 'utils/css/colors';

const ActionsWrapper = styled.div`
  ${flexBox({
    align: 'center',
    justify: 'space-between',
    direction: 'column',
  })};
  min-height: 120px;
  padding: 20px 0;
  border-top: 1px solid ${alto} ${mediaGreater(1000)`
    display: none;
  `} ${mediaLess(1000)`
    ${({ isModalOpened }) => getDisplayProp(!isModalOpened)};
  `};
`;

export default ActionsWrapper;

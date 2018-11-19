import styled from 'styled-components';

import { wildSand } from 'utils/css/colors';
import { flex, sideMargin } from 'utils/css/styles';

const StyledExpandActionWrapper = styled.div`
  ${flex({ align: 'center' })};
  padding-top: 20px;
  border-top: 1px solid ${wildSand};
  width: 100%;
  cursor: pointer;

  img {
    ${sideMargin('start', '10px')};
    transform: rotate(${({ isExpanded }) => (isExpanded ? 180 : 0)}deg);
  }
`;

const StyledIconImage = styled.img`
  width: 16px;
  opacity: 0.8;
  z-index: 20;
`;

const StyledKitchenItemsWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin-bottom: 32px;
`;

export {
  StyledExpandActionWrapper,
  StyledIconImage,
  StyledKitchenItemsWrapper,
};

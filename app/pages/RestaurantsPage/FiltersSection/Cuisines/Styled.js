import styled from 'styled-components';
import { wildSand } from 'utils/css/colors';
import { flexBox } from 'utils/css/styles';

const StyledExpandActionWrapper = styled.div`
  ${flexBox({ align: 'center' })} padding-top: 20px;
  border-top: 1px solid ${wildSand};
  width: 100%;
  cursor: pointer;
  img {
    margin: 0 0 3px 10px;
    transform: rotate(${({ isExpanded }) => (isExpanded ? 180 : 0)}deg);
  }
`;

const StyledIconImage = styled.img`
  width: 20px;
  opacity: 0.8;
  z-index: 20;
`;

// TODO add item height * 4 times instead 240 px
const SltyledKitchenItemsWrapper = styled.div`
  height: ${({ expanded }) => (expanded ? '100%' : '240px')};
  width: 100%;
  overflow: hidden;
`;

export {
  StyledExpandActionWrapper,
  StyledIconImage,
  SltyledKitchenItemsWrapper,
};

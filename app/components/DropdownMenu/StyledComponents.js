import styled, { css } from 'styled-components';
import { flex, mediaSmall } from 'utils/css/styles';
import { gold, wildSand } from 'utils/css/colors';
import { zIndexDropdown, borderRadius } from 'utils/css/variables';

const dropdownHeight = '40px';

export const StyledDropdown = styled.div`
  height: ${dropdownHeight};
  border-radius: ${borderRadius};
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  padding-right: 10px;
  ${flex({ align: 'center', justify: 'space-between' })};

  & > span {
    margin: 0 15px 0 10px;

    ${mediaSmall`margin: 0 7px 0 5px;`};
  }
`;

export const Label = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  line-height: 36px;
  padding: 0 10px;
  border-bottom: 1px solid ${wildSand};
  &:hover {
    background-color: ${gold};
  }

  span {
    margin: 0 35px 0 15px;
  }
`;

export const StyledSubMenu = styled.div`
  background-color: white;
  max-height: 220px;
  overflow-y: auto;
  position: absolute;
  top: ${dropdownHeight};
  z-index: ${({ isVisible }) => (isVisible ? zIndexDropdown : -100)};
  border-radius: ${borderRadius};
  ${flex({ direction: 'column' })};
  white-space: nowrap;
  ${({ isRightAligned }) =>
    isRightAligned
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `};
`;

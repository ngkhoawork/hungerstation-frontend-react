import styled, { css } from 'styled-components';
import {
  mediaMedium,
  mediaMediumGreater,
  flex,
  borderBottom,
  sidePadding,
  sideModal,
  sideMargin,
} from 'utils/css/styles';
import { maxModalWidth, borderRadius } from 'utils/css/variables';
import { alabaster } from 'utils/css/colors';

export const containerStyle = css`
  width: 600px;
  ${mediaMedium`width: ${maxModalWidth}`};
  ${sideModal()};
`;

export const headerStyle = css`
  ${borderBottom};
  text-align: start;
`;

export const Content = styled.div`
  ${flex({ direction: 'column', grow: 1 })};
  overflow-y: auto;
  margin-bottom: 20px;
  ${sidePadding('end', '10px;')};
  min-height: ${({ isWithDropdown }) => (isWithDropdown ? '220px' : 'initial')};
`;

export const Footer = styled.div`
  ${flex({ justify: 'space-between', shrink: 0 })};
  background-color: ${alabaster};
  margin-top: 0;
  margin-bottom: -31px;
  ${sideMargin('start', '-25px')};
  ${sideMargin('end', '-40px')};
  padding: 30px 20px;
  border-radius: 0 0 ${borderRadius} ${borderRadius};

  ${mediaMedium`${flex({ align: 'center', direction: 'column' })}`};
`;

export const FooterLeftSide = styled.div`
  ${flex({ align: 'center', justify: 'space-between' })};

  ${mediaMedium`margin-bottom: 30px;`};
`;

export const FooterRightSide = styled.div`
  ${flex({ align: 'center' })};

  ${mediaMedium`width: 100%;`};
`;

export const LeftSidePrice = styled.span`
  font-size: 20px;

  ${mediaMediumGreater`display: none;`};
`;

export const RightSidePrice = styled.span`
  font-size: 20px;

  ${mediaMedium`display: none;`};
`;

export const btn = css`
  ${mediaMedium`width: 100%; padding: 18px;`};
`;

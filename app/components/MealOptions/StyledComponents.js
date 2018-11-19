import styled, { css } from 'styled-components';
import {
  mediaMedium,
  mediaMediumGreater,
  flex,
  borderBottom,
} from 'utils/css/styles';
import { maxModalWidth, borderRadius } from 'utils/css/variables';
import { alabaster } from 'utils/css/colors';

export const containerStyle = css`
  width: 600px;
  ${mediaMedium`width: ${maxModalWidth}`};
`;

export const headerStyle = css`
  ${borderBottom};
  text-align: left;
`;

export const Content = styled.div`
  ${flex({ direction: 'column', grow: 1 })};
  overflow-y: auto;
  margin-bottom: 20px;
  padding-right: 10px;
  min-height: ${({ isWithDropdown }) => (isWithDropdown ? '220px' : 'initial')};
`;

export const Footer = styled.div`
  ${flex({ justify: 'space-between', shrink: 0 })};
  background-color: ${alabaster};
  margin: 0 -40px -31px -25px;
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

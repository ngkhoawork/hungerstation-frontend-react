import styled, { css } from 'styled-components';
import { mediaMedium, flex, borderBottom } from 'utils/css/styles';
import { fuscousGray, silverChalice } from 'utils/css/colors';
import {
  fontFamilyRegular,
  fontFamilyLight,
  maxModalWidth,
} from 'utils/css/variables';

export const Container = styled.div`
  padding: 30px;
  background: white;
  position: relative;
  width: 600px;
  ${flex({ direction: 'column' })};
  ${({ style }) => css(style)};

  ${mediaMedium`width: ${maxModalWidth}`};
`;

export const Header = styled.div`
  flex-shrink: 0;
  ${borderBottom};
  margin-right: 20px;
`;

export const Title = styled.div`
  color: ${fuscousGray};
  font-family: ${fontFamilyRegular};
  font-size: 22px;
  line-height: 1;
`;

export const Description = styled.div`
  color: ${silverChalice};
  font-family: ${fontFamilyLight};
  font-size: 14px;
  line-height: 1;
  margin: 10px 0;
`;

export const CloseBtnStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
};

export const Content = styled.div`
  ${flex({ direction: 'column' })};
  overflow-y: auto;
  flex-grow: 1;
  margin: 20px 0;
  padding-right: 10px;
`;

export const Footer = styled.div`
  flex-shrink: 0;
  ${flex({ justify: 'space-between' })};
`;

export const FooterRightSide = styled.div`
  ${flex({ align: 'center' })};
`;

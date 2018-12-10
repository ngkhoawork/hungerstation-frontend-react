import styled from 'styled-components';
import { gold, fuscousGray } from 'utils/css/colors';
import {
  flex,
  mediaSmall,
  mediaMedium,
  mediaMediumGreater,
  sideMargin,
} from 'utils/css/styles';
import {
  fontFamilyRegular,
  headerHeight,
  pageOffsetX,
  maxPageWidth,
  zIndexFixedHeader,
} from 'utils/css/variables';

export const RightSection = styled.div`
  ${flex({ align: 'center', justify: 'space-between' })};

  ${mediaMedium`max-width: 70%;`};
`;

export const LeftSection = styled.div`
  ${flex({ align: 'center' })};
  ${sideMargin('start', '-7px')};
`;

export const DesktopLocaleToggle = styled.div`
  ${mediaMediumGreater`${sideMargin('start', '111px')};`};
  ${mediaMedium`display: none;`};
`;

export const MobileLocaleToggle = styled.div`
  ${mediaMediumGreater`display: none;`};
  ${mediaMedium`${sideMargin('end', '20px')}`};
  ${mediaSmall`${sideMargin('end', '10px')}`};
`;

export const StyledBrandLogo = styled.img`
  filter: drop-shadow(0 0 3px #e4e8e6);
`;

export const StyledContent = styled.div`
  width: ${maxPageWidth};
  padding: 0 ${pageOffsetX};
  ${flex({ align: 'center', justify: 'space-between' })};
  margin: 0 auto;

  ${mediaMedium`
    padding: 0 20px;
    width: 100%;
  `};
`;

export const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeader = styled.div`
  color: white;
  ${props =>
    props.gold &&
    `
    background-color: ${gold};
    color: ${fuscousGray};
  `};
  display: flex;
  width: 100%;
  height: ${headerHeight};
  font-family: ${fontFamilyRegular};

  ${({ isFixed }) =>
    isFixed &&
    `
    position: fixed;
    top: 0;
    z-index: ${zIndexFixedHeader};
    transform: translateY(-${headerHeight});
    transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  `};

  ${({ isFixed, isShown }) =>
    isFixed &&
    isShown &&
    `
    transform: translateY(0);
  `};

  ${mediaMedium`max-width: 100%;`};
`;

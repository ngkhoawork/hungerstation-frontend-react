import styled from 'styled-components';
import { gold } from 'utils/css/colors';
import { flex, mediaSmall, mediaMedium, mediaLess } from 'utils/css/styles';
import {
  fontFamilyRegular,
  headerHeight,
  pageOffsetX,
  maxPageWidth,
} from 'utils/css/variables';

export const RightSection = styled.div`
  ${flex({ align: 'center', justify: 'space-between' })};
`;

export const LeftSection = styled.div`
  ${flex({ align: 'center' })};
`;

export const StyledBrandLogo = styled.img`
  filter: drop-shadow(0 0 3px #e4e8e6);
`;

export const StyledContent = styled.div`
  width: 100%;
  padding: 0 ${pageOffsetX};
  ${mediaMedium`padding: 0 20px;`};
  ${flex({ align: 'center', justify: 'space-between' })};
  margin: 0 auto;
`;

export const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeader = styled.div`
  ${props => props.gold && `background-color: ${gold};`};
  display: flex;
  width: 100%;
  height: ${headerHeight};
  font-family: ${fontFamilyRegular};
  max-width: ${maxPageWidth};

  ${mediaLess('950px')`
    padding: 32px 80px
  `};
  ${mediaMedium`
    padding: 10px 20px;
  `};
  ${mediaSmall`
    padding: 10px;
  `};
`;

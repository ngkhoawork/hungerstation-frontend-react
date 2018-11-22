import styled from 'styled-components';
import { flex, mediaMedium } from 'utils/css/styles';
import { pageOffsetX, mobPageOffsetX, maxPageWidth } from 'utils/css/variables';

export const Container = styled.div`
  width: 100%;
  max-width: ${maxPageWidth};
  margin-bottom: 60px;

  ${mediaMedium`max-width: 100%;`};
`;

export const ContentContainer = styled.div`
  padding-left: ${pageOffsetX};
  ${flex({ align: 'flex-start' })};

  ${mediaMedium`
    padding: 0 ${mobPageOffsetX};
    ${flex({ direction: 'column' }, false)};
  `};
`;

export const LeftSide = styled.div`
  ${flex({ grow: 1 }, false)};
  width: 100%;
`;

export const RightSide = styled.div`
  margin: 0 20px;

  ${mediaMedium`
    margin: 20px 0;
    width: 100%;
  `};
`;

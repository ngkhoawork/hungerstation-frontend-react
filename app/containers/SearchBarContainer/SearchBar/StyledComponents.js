import styled from 'styled-components';
import media from 'styled-media-query';
import { flex, mediaMedium } from 'utils/css/styles';

export const searchBarHeight = '56px';

const ButtonWrapper = styled.div`
  width: 144px;
  height: 40px;

  ${mediaMedium`
    width: 100%;
    height: 56px;
  `};
`;

const Bar = styled.span`
  ${flex({ align: 'center', justify: 'space-between' })};
  border-radius: 8px;
  margin: 15px 0;
  height: ${searchBarHeight};
  background-color: white;
  width: 808px;

  ${media.lessThan('850px')`
  ${flex({ direction: 'column', justify: 'center', align: 'center' }, false)};
    align-self: center;
    height: auto;
    border: 0;
    width: 100%;
    background-color: transparent;
  `};
`;

const BarActions = styled.div`
  ${flex()};
  margin: 0 10px;

  ${mediaMedium`
    width: 100%;
  `};
`;

export { Bar, ButtonWrapper, BarActions };

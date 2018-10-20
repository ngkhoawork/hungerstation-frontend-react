import styled from 'styled-components';
import media from 'styled-media-query';
import { flexBox, mediaMedium } from 'utils/css/styles';

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
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    border-radius: 8px;
    margin: 15px 0;
    height: ${searchBarHeight};
    background-color: white;
    width: 808px;
  `,
  )};
  ${media.lessThan('850px')`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    border: 0;
    width: 100%;
    align-self: center;
    background-color: transparent;
  `};
`;

const BarActions = styled.div`
  ${flexBox(
    {},
    `
    margin: 0 10px;
  `,
  )};
  ${mediaMedium`
    width: 100%;
  `};
`;

export { Bar, ButtonWrapper, BarActions };

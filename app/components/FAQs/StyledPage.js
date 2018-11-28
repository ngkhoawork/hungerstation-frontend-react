import styled from 'styled-components';
import {
  flex,
  mediaMedium,
  mediaLess,
  sideMargin,
  sidePadding,
} from 'utils/css/styles';
import { fontFamilyRegular, fontFamilyLight } from 'utils/css/variables';
import { alabaster } from 'utils/css/colors';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding-bottom: 100px;
  ${flex({ align: 'flex-start', justify: 'space-between', wrap: 'wrap' })};
  ${mediaLess(600)`
    padding: 10px;
  `};
`;

export const MenuBar = styled.div`
  margin-top: 43px;
  padding-top: 160px;
  ${sideMargin('end', '30px')};
  width: 170px;
  ${flex({
    align: 'flex-start',
    justify: 'center',
    direction: 'column-reverse',
  })};

  ${mediaMedium`
    display: none;
  `};
`;

export const MenuItem = styled.div`
  display: block;
  text-decoration: none;
  color: #9f9f9f;
  font-size: 14px;
  padding: 15px;

  &:hover {
    color: #000000;
    background: ${alabaster};
    border-radius: 8px;
  }
  ${({ active }) =>
    active &&
    `
    color: #000000;
    background-color: ${alabaster};
    border-radius: 8px;
  `};
`;

export const MiddleSection = styled.div`
  ${flex({
    align: 'flex-start',
    justify: 'flex-start',
    direction: 'column',
    wrap: 'wrap',
  })};

  ${mediaLess(1000)`
    flex: 1;
    display: block;
  `};

  ${mediaLess(600)`
    padding: 10px;
    width: 100%;
    display: inline;
  `};
`;

export const Title = styled.div`
  margin-bottom: 64px;
  ${mediaMedium`
    ${sidePadding('start', '25px')};
  `};
`;
export const SubTitle = styled.div`
  height: 24px;
  width: 100%;
  opacity: 0.6;
  color: #6f6e6b;
  font-family: ${fontFamilyLight};
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 24px;

  ${mediaMedium`
    width: 100%;
  `};
`;

export const Content = styled.div`
  ${flex({ direction: 'column' }, false)};
  width: 600px;
  margin-bottom: 20%;
  ${mediaMedium`width: 100%;`};
  ${mediaLess(600)`
    display: inline;
  `};
`;

export const MenuBarMobile = styled.div`
  display: none;

  ${mediaLess(1080)`flex: 0 1 30%;`};

  ${mediaMedium`
    display: block;
    border-color: lightGray;
    border-radius: 8px;
    background: #ffff;
    border-style: solid;
    border-width: 1px;
    font-family: ${fontFamilyRegular};
    padding: 1px 10px;
    margin-bottom: 20px;
  `};
`;

export const Section = styled.div`
  display: none;
  ${mediaMedium`
    display: block;
    ${sideMargin('end', '100%')};
    margin-bottom: 20px;
  `};
`;

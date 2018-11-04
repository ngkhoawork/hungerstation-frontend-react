import styled from 'styled-components';
import { flexBox, mediaMedium, mediaLess } from 'utils/css/styles';
import { fontFamilyRegular } from 'utils/css/variables';

import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding-bottom: 100px;
  padding-top: 100px;
  flex-wrap: wrap;
  ${flexBox({ align: 'flex-start', justify: 'space-between' })};
  ${mediaLess(600)`
    padding: 10px;
  `};
`;

export const MenuBar = styled.div`
  margin-top: 43px;
  display: flex;
  flex-direction: column;
  padding-top: 160px;
  flex: unset;
  margin-right: 30px;
  width: 170px;
  ${flexBox({ align: 'flex-start', justify: 'center', direction: 'column' })};
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
    background: #f7f7f7;
    border-radius: 8px;
  }
`;

export const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${flexBox({
    align: 'flex-start',
    justify: 'flex-start',
    direction: 'column',
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
  white-space: pre-wrap;
  ${mediaMedium`
    padding-left: 25px;
  `};
`;
export const SubTitle = styled.div`
  height: 24px;
  width: 470px;
  opacity: 0.6;
  color: #6f6e6b;
  font-family: ${fontFamilyRegular};
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 24px;
`;

export const Content = styled.div`
  flex-direction: column;
  width: 700px;
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  color: #9f9f9f;
  text-decoration: none;
  ${mediaLess(1080)`
    flex: 0 1 30%;
  `};

  ${mediaMedium`
    margin-bottom: 5px;
  `};
`;

export const MenuBarMobile = styled.div`
  display: none;
  ${mediaLess(1080)`
    flex: 0 1 30%;
  `};
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
  `};
`;

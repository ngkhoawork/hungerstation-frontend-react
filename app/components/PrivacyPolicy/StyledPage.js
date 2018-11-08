import styled from 'styled-components';
import { flex, mediaMedium, mediaLess } from 'utils/css/styles';
import { fontFamilyRegular } from 'utils/css/variables';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  ${flex(
    { align: 'flex-start', justify: 'center' },
    `
    width: 100%;
    background-color: #ffffff;
    padding-bottom: 100px;
    padding-top: 15px;
    flex-wrap: wrap;
  `,
  )};

  ${mediaLess(600)`
    padding: 10px;
  `};
`;

export const MenuBar = styled.div`
  ${flex({ align: 'flex-start', justify: 'center', direction: 'column' })};
  display: flex;
  flex-direction: column;
  padding-top: 22%;
  margin-right: 30px;
  width: 170px;

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
    color: red;
    background: #f7f7f7;
    border-radius: 8px;
  }
`;

export const MiddleSection = styled.div`
  ${flex({ align: 'flex-start', justify: 'flex-start', direction: 'column' })};
  ${mediaLess(1000)`
  flex: 1;
  display: block;
`};
  ${mediaLess(600)`
  padding: 10px;
  width:100%;
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
  width: 600px;
  margin-bottom: 20%;

  ${mediaLess(600)`
  display: -webkit-box;
  `};
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
    font-family= ${fontFamilyRegular};
    padding: 1px 10px;
    margin-bottom: 20px


  `};
`;

export const Section = styled.div`
  display: none;
  ${mediaMedium`
    display: block;
  `};
`;

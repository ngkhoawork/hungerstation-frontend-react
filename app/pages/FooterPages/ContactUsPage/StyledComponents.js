import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';

export const Wrapper = styled.div`
  ${flexBox({ align: 'flex-start', justify: 'space-between' })};
  width: 100%;
  background-color: #ffffff;
  padding-top: 6%;
  padding-bottom: 100px;
  flex-flow: row;
  flex-wrap: wrap;

  ${mediaLess(600)`
    padding: 20px;
  `};
`;

export const UpperSide = styled.div`
  width: 100%;
  height: 100%;
  ${flexBox({ align: 'flex-start', justify: 'space-between' })};

  ${mediaLess(600)`
    padding: 20px;
  `};
`;

export const BottomSide = styled.div`
  padding-top: 12%;
  ${flexBox({ align: 'flex-start', justify: 'space-between' })};
`;

export const Description = styled.div`
  padding-left: 4%;
  z-index: 2;
  ${mediaLess(600)`
    padding-top: 75%;
  `};
`;
export const ContactUs = styled.div`
  ${'' /* padding-left: 300px; */};
`;

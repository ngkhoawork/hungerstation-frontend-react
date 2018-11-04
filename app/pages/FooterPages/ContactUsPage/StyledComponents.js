import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';

export const Wrapper = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'space-between' },
    `
  width: 100%;
  background-color: #ffffff;
  padding-bottom: 100px;
  padding-top: 100px;
  flex-flow: row;
  flex-wrap: wrap;
  padding-top: 6%;
`,
  )};

  ${mediaLess(1250)`
`};
  ${mediaLess(600)`
  padding: 20px;
`};
`;

export const UpperSide = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'space-between' },
    `
  width: 100%;
  height: 100%;
  `,
  )};
  ${mediaLess(600)`
    padding: 20px;
    
  `};
`;

export const BottomSide = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'space-between' },
    `
padding-top: 12%;
`,
  )};
`;

export const Descreption = styled.div`
  padding-left: 4%;
  z-index: 2 ${mediaLess(600)`
    padding-top: 75%;
    
  `};
`;
export const ContactUs = styled.div`
  //  padding-left: 300px;
`;

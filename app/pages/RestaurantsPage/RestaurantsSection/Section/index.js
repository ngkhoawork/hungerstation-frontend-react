import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';

const StyledSection = styled.div`
  ${flexBox(
    { align: 'flex-start', direction: 'column' },
    `
    position: relative;
    margin-bottom: 70px;
    width: 100%;
  `,
  )};
  ${mediaLess(600)`
    padding-left: 20px;
    margin-bottom: 30px;
  `};
`;

export default StyledSection;

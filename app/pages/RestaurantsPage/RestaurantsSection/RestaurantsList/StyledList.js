import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';

const StyledList = styled.div`
  ${flexBox(
    { align: 'flex-start' },
    `
    width: 912px;
    flex-wrap: wrap;
  `,
  )};

  ${mediaLess(600)`
    flex-direction: column;
    align-items: center;
    width: 100%;
`};
`;

export default StyledList;

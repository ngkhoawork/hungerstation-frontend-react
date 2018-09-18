import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledBottomPart = styled.div`
  ${flexBox(
    { align: 'flex-start', direction: 'column' },
    `
    width: 100%;
    flex: 0.38;
    div > p {
      margin-top: 4px;
      margin-right: 10px;
    }
    div > img {
      margin-right: 5px;
    }
  `,
  )};
`;

export default StyledBottomPart;

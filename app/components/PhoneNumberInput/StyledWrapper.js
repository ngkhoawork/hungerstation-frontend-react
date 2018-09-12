import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledWrapper = styled.div`
  ${flexBox(
    { align: 'flex-start' },
    `
      margin-top: 16px;
      margin-bottom: 8px;

      > div.prefix {
        margin-right: 16px;
      }

      [dir="rtl"] & > div.prefix {
        margin-left: 16px;
      }

      > div.input {
        flex-grow: 1;

      }
    `,
  )};
`;

export default StyledWrapper;

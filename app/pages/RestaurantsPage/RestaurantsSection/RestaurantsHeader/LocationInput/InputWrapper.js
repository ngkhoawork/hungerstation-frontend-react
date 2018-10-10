import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';
import { wildSand } from 'utils/css/colors';

const InputWrapper = styled.div`
  ${flexBox(
    { align: 'center' },
    `
    background-color: ${wildSand}
    border-radius: 8px;
    height: 35px;
    padding: 0 15px;
    min-width: 270px;
    margin-bottom: 8px;
  `,
  )};
  img {
    margin-bottom: 3px;
  }
  ${mediaLess(860)`
    margin-left: 20px;
  `};
  ${mediaLess(600)`
    margin-left: 0;
  `};
`;

export default InputWrapper;

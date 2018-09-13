import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/styles';
import { wildSant } from 'utils/colors';

const InputWrapper = styled.div`
  ${flexBox(
    { align: 'center' },
    `
    background-color: ${wildSant}
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

import styled from 'styled-components';
import { flexBox, mediaGreater, mediaLess, getDisplayProp } from 'utils/styles';

const ButtonWrapper = styled.div`
  ${flexBox(
    { align: 'center', justify: 'center' },
    `
    cursor: pointer;
  `,
  )};
  ${mediaGreater(1000)`
    display: none;
  `};
  ${mediaLess(1000)`
    ${({ isModalOpened }) => getDisplayProp(isModalOpened)};
  `};
`;

export default ButtonWrapper;

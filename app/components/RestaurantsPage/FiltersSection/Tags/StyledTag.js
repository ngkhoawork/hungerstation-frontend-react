import styled from 'styled-components';
import { flexBox } from 'utils/styles';
import { gold } from 'utils/colors';

const StyledTag = styled.span`
  ${flexBox(
    { align: 'flex-start' },
    `
    padding: 5px 0;
    margin-right: 20px;
  `,
  )};

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: ${gold};
    border-radius: 8px;
    padding: 5px 8px 1px;
  `};
`;

export default StyledTag;

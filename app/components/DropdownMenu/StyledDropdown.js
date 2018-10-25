import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';
import Paragraph from 'components/Paragraph';

const StyledDropdown = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    height: 40px;
    border-radius: 8px;
    width: 100%;
  `,
  )};

  & > ${Paragraph} {
    margin: 0 15px 0 10px;
  }
`;

export default StyledDropdown;

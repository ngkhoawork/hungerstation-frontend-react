import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';
import StyledParagraph from 'components/Paragraph';
import Icon from 'components/Icon/StyledIcon';

const StyledDropdown = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    height: 40px;
    border-radius: 8px;
    width: 100%;
  `,
  )};

  & > ${StyledParagraph} {
    margin: 5px 20px 0 10px;
  }

  ${/* sc-selector */ Icon} {
    margin-top: 5px;
  }
`;

export default StyledDropdown;

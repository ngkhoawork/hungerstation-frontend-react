import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';
import Paragraph from 'components/Paragraph';
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

  & > ${Paragraph} {
    margin: 5px 20px 0 10px;
  }

  ${Icon} {
    margin-top: 5px;
  }
`;

export default StyledDropdown;

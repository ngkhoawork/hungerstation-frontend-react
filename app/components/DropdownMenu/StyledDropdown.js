import styled from 'styled-components';
import { flex } from 'utils/css/styles';
import Paragraph from 'components/Paragraph';

const StyledDropdown = styled.div`
  height: 40px;
  border-radius: 8px;
  width: 100%;
  ${flex({ align: 'center', justify: 'space-between' })};

  & > ${Paragraph} {
    margin: 0 15px 0 10px;
  }
`;

export default StyledDropdown;

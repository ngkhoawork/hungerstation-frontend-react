import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';

const FiltersWrapper = styled.div`
  position: relative;
  left: -24px;
  width: 232px;
  box-shadow: 0 0 35px 5px rgba(183, 157, 157, 0.09);
  padding: 30px 24px 24px;
  ${flexBox({ align: 'flex-start', justify: 'center', direction: 'column' })};

  ${mediaLess(1000)`
    display: none;
  `};
`;

export default FiltersWrapper;

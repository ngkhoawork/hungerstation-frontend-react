import styled from 'styled-components';
import { mediaGreater } from 'utils/styles';

const MobileFiltersWrapper = styled.div`
  width: 100%;
  padding-right: 20px;
  ${mediaGreater(1000)`
    display: none;
  `};
`;

export default MobileFiltersWrapper;

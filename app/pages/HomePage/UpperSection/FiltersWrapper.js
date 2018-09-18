import styled from 'styled-components';
import { mediaGreater, mediaMedium } from 'utils/styles';

const FiltersWrapper = styled.div`
  width: 200px;
  margin-top: 20px;
  ${mediaGreater(850)`
    display: none;
  `};
  ${mediaMedium`
    display: block;
  `};
`;

export default FiltersWrapper;

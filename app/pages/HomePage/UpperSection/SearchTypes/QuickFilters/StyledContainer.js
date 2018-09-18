import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/styles';
import StyledSearchType from '../StyledContainer';

const StyledContainer = styled.div`
  ${flexBox({ align: 'center', justify: 'space-between' }, `flex: 0.25`)};
  ${StyledSearchType} && {
    ${mediaMedium`
      display: none;
    `};
  }
`;

export default StyledContainer;

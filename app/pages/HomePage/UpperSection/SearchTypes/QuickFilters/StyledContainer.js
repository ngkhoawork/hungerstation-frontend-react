import styled from 'styled-components';
import { flex, mediaMedium } from 'utils/css/styles';
import Paragraph from 'components/Paragraph';
import StyledSearchType from '../StyledContainer';

const StyledContainer = styled.div`
  ${flex({ align: 'center', justify: 'space-between' })};

  ${StyledSearchType} && {
    ${mediaMedium`
      display: none;
    `};
  }

  ${/* sc-selector */ Paragraph} {
    margin: 0 12px;
  }
`;

export default StyledContainer;

import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/css/styles';
import Paragraph from 'components/Paragraph';
import StyledSearchType from '../StyledContainer';

const StyledContainer = styled.div`
  ${flexBox({ align: 'center', justify: 'space-between' })};

  ${StyledSearchType} && {
    ${mediaMedium`
      display: none;
    `};
  }

  ${Paragraph} {
    margin: 0 12px;
  }
`;

export default StyledContainer;

import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/css/styles';
import Paragraph from 'components/Paragraph/StyledParagraph';
import StyledSearchType from '../StyledContainer';

const StyledContainer = styled.div`
  ${flexBox({ align: 'center', justify: 'space-between' })};

  ${Paragraph} {
    margin-left: 24px;
  }

  ${StyledSearchType} && {
    ${mediaMedium`
      display: none;
    `};
  }
`;

export default StyledContainer;

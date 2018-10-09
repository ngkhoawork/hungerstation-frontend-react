import styled from 'styled-components';
import { mediaLess } from 'utils/css/styles';
import { LARGE_SCREEN_CONTENT_WIDTH } from './constants';

const PageContent = styled.div`
  width: ${LARGE_SCREEN_CONTENT_WIDTH}px;
  overflow: visible;

  ${mediaLess(600)`
    width: 100%;
    `};
`;

export default PageContent;

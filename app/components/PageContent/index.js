import styled from 'styled-components';
import { mediaMedium } from 'utils/css/styles';
import { pageContentWidth } from 'utils/css/variables';

const PageContent = styled.div`
  width: ${pageContentWidth};

  ${mediaMedium`width: 100%;`};

  ${({ css }) => css};
`;

export default PageContent;

import styled from 'styled-components';

import ButtonLink from 'components/ButtonLink';
import { flex, mediaSmall } from 'utils/css/styles';
import { boulder } from 'utils/css/colors';
import { fontFamilyLight } from 'utils/css/variables';

export const BreadcrumbsStyled = styled.div`
  ${flex({}, true)};

  ${mediaSmall`
    width: calc(100% - 40px);

    li {
      padding: 0 8px 0 0 !important;
    }
  `};

  ul {
    ${flex({ wrap: 'wrap' }, true)};
    list-style: none;
    font-family: ${fontFamilyLight};
    margin: 0;
  }

  li {
    padding: 0 16px 0 0;
    font-size: 13px;
    white-space: nowrap;
    margin-bottom: 8px;
  }

  a {
    display: inline-block;
  }

  ${/* sc-selector */ ButtonLink} {
    margin-top: -3px;
  }

  a:not(${ButtonLink}) {
    text-decoration: none;
    color: ${boulder};

    &:hover {
      text-decoration: underline;
    }
  }
`;

import styled from 'styled-components';
import { ButtonLinkCss } from 'components/ButtonLink';
import { flex, mediaSmall } from 'utils/css/styles';
import { boulder } from 'utils/css/colors';
import { fontFamilyLight } from 'utils/css/variables';
import dotIcon from 'icons/dot-crumbs.svg';

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
    font-size: 13px;
    white-space: nowrap;
    margin-bottom: 8px;
  }

  a,
  span {
    display: inline-block;
    text-decoration: none;
    color: ${boulder};

    &:after {
      content: url(${dotIcon});
      margin: 0 16px;
    }
  }

  a:hover {
    text-decoration: underline;
  }

  li:last-child {
    a,
    span {
      ${ButtonLinkCss};
      margin-top: -3px;

      &:after {
        content: '';
        margin: 0;
      }
    }
  }

  li:nth-last-child(2) {
    a,
    span {
      &:after {
        content: '';
        margin: 0 7px;
      }
    }
  }
`;

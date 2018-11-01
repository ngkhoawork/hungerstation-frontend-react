import styled from 'styled-components';

import ButtonLink from 'components/ButtonLink';
import { mediaSmall } from 'utils/css/styles';
import { boulder } from 'utils/css/colors';

export const BreadcrumbsStyled = styled.div`
  display: flex;
  justify-content: flex-start;

  ${mediaSmall`
    width: calc(100% - 40px);

    li {
      padding: 0 8px 0 0 !important;
    }
  `};

  ul {
    display: flex;
    list-style: none;
    font-family: 'HungerStation-Light', sans-serif;
    justify-content: flex-start;
    margin-top: 20px;
  }

  li {
    padding: 0 16px 0 0;
    font-size: 13px;
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

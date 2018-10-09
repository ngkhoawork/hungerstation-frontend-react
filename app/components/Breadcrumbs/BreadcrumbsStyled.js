import styled from 'styled-components';

import ButtonLink from 'components/ButtonLink';
import { mediaSmall } from 'utils/css/styles';
import { boulder } from 'utils/css/colors';

export const BreadcrumbsStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  width: calc(100% - 112px);
  ${mediaSmall`
    width: calc(100% - 40px);

    li {
      padding: 0 8px 0 0 !important;
    }
  `};

  ul {
    display: flex;
    list-style: none;
    font-family: 'HungerStation-Light';
    justify-content: flex-start;
    padding: 16px 0px;
    margin: 4px 0;
  }
  border-bottom: 2px solid rgba(186, 186, 186, 0.22);

  li {
    padding: 0 16px 0 0;
    font-size: 13px;
  }

  a {
    display: inline-block;
  }

  a:not(${ButtonLink}) {
    text-decoration: none;
    color: ${boulder};

    &:hover {
      text-decoration: underline;
    }
  }
`;

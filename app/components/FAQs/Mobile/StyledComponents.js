import styled from 'styled-components';
import { flex, mediaMedium } from 'utils/css/styles';

export const Container = styled.div`
  margin-bottom: 20px;

  ${mediaMedium`
    margin-bottom: 0px;
  `};
`;

export const Header = styled.div`
  ${flex({ align: 'center', justify: 'space-between' })};
`;

export const Title = styled.div`
  font-size: 18px;
`;

export const Content = styled.div`
  margin-top: 20px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

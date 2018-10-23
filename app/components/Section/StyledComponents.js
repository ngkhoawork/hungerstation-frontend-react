import styled from 'styled-components';
import { flex, fontCorrection } from 'utils/css/styles';
import { borderRadius } from 'utils/css/variables';
import { jade, alabaster } from 'utils/css/colors';

export const Container = styled.div`
  margin: 20px 0;
`;

export const Header = styled.div`
  ${flex({ align: 'center', justify: 'space-between' })};
`;

export const Title = styled.div`
  font-size: 18px;
  ${fontCorrection};
`;

export const Hint = styled.span`
  color: ${jade};
  font-size: 12px;
  padding: 5px 10px;
  background-color: ${alabaster};
  border-radius: ${borderRadius};

  + span {
    margin-left: 10px;
  }
`;

export const Content = styled.div`
  margin-top: 20px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

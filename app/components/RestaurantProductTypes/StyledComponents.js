import styled from 'styled-components';
import { flex, mediaMedium } from 'utils/css/styles';
import { fuscousGray, silverChalice, alabaster } from 'utils/css/colors';
import { borderRadius } from 'utils/css/variables';

export const ProductTypeBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;

  ${mediaMedium`flex-direction: row;`};
`;

export const ProductType = styled.span`
  ${flex({ justify: 'space-between', align: 'center' })};
  padding: 7px;
  margin-bottom: 10px;
  text-decoration: none;
  color: ${silverChalice};
  font-size: 14px;
  cursor: pointer;
  line-height: 1;

  ${mediaMedium`margin-right: 10px;`};

  ${({ active }) =>
    active &&
    `
    background-color: ${alabaster};
    border-radius: ${borderRadius};
  `};
`;

export const Name = styled.span`
  padding-top: 6px;

  ${({ active }) =>
    active &&
    `
    color: ${fuscousGray};
  `};

  ${({ active }) =>
    active &&
    mediaMedium &&
    `
    margin-right: 10px;
  `};
`;

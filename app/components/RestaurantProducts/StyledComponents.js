import styled from 'styled-components';
import imgPlaceholder from 'images/burger-icon.png';
import { flex, mediaMedium, mediaMediumGreater } from 'utils/css/styles';
import { fontFamilyRegular, borderRadius } from 'utils/css/variables';
import { lightGray, silverChalice, fuscousGray } from 'utils/css/colors';

export const List = styled.div`
  width: 100%;
`;

export const Item = styled.div`
  ${flex({ direction: 'column' })};
  position: relative;
  padding-bottom: 20px;
  margin: 40px 20px;
  border-bottom: 1px solid ${lightGray};
  cursor: pointer;

  :last-child {
    border-bottom: none;
  }

  ${mediaMedium`
    border-bottom: none;
    margin: 40px 0;
  `};
`;

export const ContentContainer = styled.div`
  display: flex;
`;

export const Img = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 10px;
  box-shadow: 8px 12px 23px -3px rgba(59, 59, 59, 0.13);
  background-color: white;
  background-image: url(${({ image }) => image || imgPlaceholder});
  background-size: contain;
  background-position: center;
  flex-shrink: 0;
`;

export const Content = styled.div`
  margin-left: 30px;
  ${flex({ direction: 'column', justify: 'space-between' })};
  flex-grow: 1;
`;

export const Title = styled.div`
  height: 16px;
  color: ${fuscousGray};
  font-family: ${fontFamilyRegular};
  font-size: 18px;
  line-height: 16px;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  color: ${silverChalice};
  font-family: ${fontFamilyRegular};
  font-size: 14px;
  line-height: 14px;
`;

export const PriceContainer = styled.div`
  line-height: 1;
  ${flex({ align: 'center' })};

  ${mediaMediumGreater`
    position: absolute;
    right: 0;
    top: -20px;
  `};
`;

export const Footer = styled.div`
  ${flex({ justify: 'flex-end', align: 'center' })};

  ${mediaMedium`display: none;`};
`;

export const MobileFooter = styled.div`
  ${mediaMedium`
    ${flex({ justify: 'space-between', align: 'center' })};
    border: solid 1px ${lightGray};
    border-radius: ${borderRadius};
    padding: 12px 16px;
    width: 100%;
    margin-top: 20px;
  `};

  ${mediaMediumGreater`display: none;`};
`;

export const AddBtn = styled.div`
  ${flex({ align: 'center' })};
  line-height: 1;
  flex-shrink: 0;
`;

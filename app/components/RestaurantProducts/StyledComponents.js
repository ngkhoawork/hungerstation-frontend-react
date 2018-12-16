import styled, { css } from 'styled-components';
import img from 'images/burger-icon.png';
import {
  flex,
  mediaSmall,
  mediaMedium,
  mediaMediumGreater,
  device,
  sidePosition,
  sideMargin,
  rotateArrowIcon,
} from 'utils/css/styles';
import { fontFamilyRegular, borderRadius } from 'utils/css/variables';
import { lightGray, silverChalice } from 'utils/css/colors';

export const List = styled.div`
  width: 100%;
`;

export const Item = styled.div`
  ${flex({ direction: 'column' })};
  position: relative;
  padding-bottom: 20px;
  margin-top: 40px;
  ${sideMargin('end', '20px')};
  border-bottom: 1px solid ${lightGray};
  cursor: pointer;

  :last-child {
    border-bottom: none;
  }

  ${mediaMedium`
    border-bottom: none;
    margin-top: 40px;
    ${sideMargin('end', '0')};
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
  background-image: url(${({ images }) => (images[0] ? images[0].url : img)});
  background-size: contain;
  background-position: center;
  ${flex({ shrink: 0 }, false)};

  ${device.retina`
    background-image: url(${({ images }) => (images[1] ? images[1].url : img)});
  `};
  ${device.retina3x`
    background-image: url(${({ images }) => (images[2] ? images[2].url : img)});
  `};
`;

export const Content = styled.div`
  ${sideMargin('start', '30px')};
  ${flex({ direction: 'column', justify: 'space-between', grow: 1 })};

  ${mediaSmall`word-break: break-word;`};
`;

export const TitleContainer = styled.div`
  ${flex({ align: 'flex-start' })};
  margin-bottom: 10px;
`;

export const titleStyle = css`
  font-size: 18px;
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
    ${sidePosition('end', '0')};
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

  ${mediaMediumGreater`
    display: none;
  `};
`;

export const AddBtn = styled.div`
  ${flex({ align: 'center', shrink: 0 })};
  line-height: 1;
`;
export const IconContainer = styled.div`
  ${rotateArrowIcon()};
`;

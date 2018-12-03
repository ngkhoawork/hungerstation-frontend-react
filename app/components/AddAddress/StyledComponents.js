import styled, { css } from 'styled-components';
import Input from '@material-ui/core/Input';
import {
  flex,
  mediaSmall,
  mediaMedium,
  mediaMediumGreater,
  sideMargin,
  sidePadding,
  sidePosition,
} from 'utils/css/styles';
import {
  maxModalWidth,
  maxModalContentHeight,
  fontFamilyBold,
} from 'utils/css/variables';
import { lightGray } from 'utils/css/colors';

export const containerCss = css`
  ${mediaMediumGreater`width: 768px`};
`;

export const Container = styled.div`
  ${flex({ direction: 'column' })};
  position: relative;
  max-height: ${maxModalContentHeight};
  margin-top: -15px;
  width: calc(100% + 20px);

  ${mediaMedium`width: calc(${maxModalWidth} - 40px)`};
`;

const mapHeight = '190px';
const smallMapHeight = '160px';
export const Map = styled.div`
  height: ${mapHeight};
  min-height: ${mapHeight};
  width: calc(100% + 44px);
  margin: 0 0 20px -25px;

  ${mediaMedium`width: calc(100% + 55px);`};

  ${mediaSmall`
    height: ${smallMapHeight};
    min-height: ${smallMapHeight};
  `};
`;

const locationBigIconSize = '45px';
export const markerStyle = {
  position: 'absolute',
  top: `calc(${mapHeight}/2 - ${locationBigIconSize})`,
  left: `calc(50% - ${locationBigIconSize}/2)`,
};

export const StyledInput = styled(Input)`
  position: absolute !important;
  width: 70%;
  top: 10px;
  left: 15%;
  background: white;
  padding-top: 0;
  padding-bottom: 0;
  ${sidePadding('start', '10px;')};
  ${sidePadding('end', '30px;')};
  ${mediaMedium`
    width: 100%;
    left: 0;
    ${sidePosition('start', '0')};
  `};
`;

export const locateMeStyle = css`
  position: absolute;
  top: 15px;
  right: calc(15% + 5px);

  ${mediaMedium`
    ${sidePosition('end', '5px')};
  `};
`;

export const Content = styled.div`
  overflow-y: auto;
  ${flex({ grow: 1 }, false)};
  margin-bottom: 15px;
  ${sidePadding('end', '10px;')};
`;

export const InputsContainer = styled.div`
  ${flex({}, true)};

  ${mediaMedium`
    ${flex({ direction: 'column' }, false)};
  `};
`;

export const Desc = styled.div`
  width: 50%;
  ${sideMargin('end', '20px')};

  ${mediaMedium`
    width: 100%;
  `};
`;

export const ZoomCtrl = styled.div`
  position: absolute;
  right: 0;
  top: calc(${mapHeight} - 70px);
  ${flex({ direction: 'column' })};
  border-radius: 2px;
  background: white;
  overflow: hidden;

  ${mediaSmall`top: calc(${smallMapHeight} - 70px)`};
`;

export const ZoomBorder = styled.div`
  margin: 0 3px;
  height: 1px;
  width: 18px;
  background: ${lightGray};
`;

export const ZoomBtn = styled.div`
  width: 24px;
  height: 24px;
  font-size: 20px;
  font-family: ${fontFamilyBold};
  ${flex({ align: 'center', justify: 'center' })};
  cursor: pointer;
`;

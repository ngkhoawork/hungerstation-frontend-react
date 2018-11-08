import styled, { css } from 'styled-components';
import Input from '@material-ui/core/Input';
import { flex, mediaSmall, mediaMedium } from 'utils/css/styles';
import {
  maxModalWidth,
  maxModalContentHeight,
  fontFamilyBold,
} from 'utils/css/variables';
import { lightGray } from 'utils/css/colors';

export const Container = styled.div`
  ${flex({ direction: 'column' })};
  text-align: center;
  width: 700px;
  position: relative;
  max-height: ${maxModalContentHeight};

  ${mediaMedium`width: calc(${maxModalWidth} - 40px)`};
`;

const mapHeight = '250px';
const smallMapHeight = '180px';
export const Map = styled.div`
  height: ${mapHeight};
  min-height: ${mapHeight};
  width: calc(100% + 40px);
  margin: 0 -20px 20px;

  ${mediaSmall`
    height: ${smallMapHeight};
    min-height: ${smallMapHeight};
  `};
`;

const locationBigIconSize = '56px';
export const markerStyle = {
  position: 'absolute',
  top: `calc(${mapHeight}/2 - ${locationBigIconSize})`,
  left: `calc(50% - ${locationBigIconSize}/2)`,
};

export const StyledInput = styled(Input)`
  position: absolute !important;
  width: 70%;
  top: 20px;
  left: 15%;
  background: white;
  padding: 0 30px 0 10px;
  ${mediaMedium`
    width: 100%;
    left: 0;
  `};
`;

export const locateMeStyle = css`
  position: absolute;
  top: 25px;
  right: calc(15% + 5px);

  ${mediaMedium`
    right: 5px;
  `};
`;

export const Content = styled.div`
  overflow-y: auto;
  ${flex({ grow: 1 }, false)};
  margin-bottom: 20px;
  padding-right: 10px;
`;

export const InputsContainer = styled.div`
  ${flex({}, true)};

  ${mediaMedium`
    ${flex({ direction: 'column' }, false)};
  `};
`;

export const Desc = styled.div`
  width: 50%;
  margin-right: 20px;

  ${mediaMedium`
    width: 100%;
  `};
`;

export const ZoomCtrl = styled.div`
  position: absolute;
  right: 0;
  top: calc(${mapHeight} - 60px);
  ${flex({ direction: 'column' })};
  border-radius: 2px;
  background: white;
  overflow: hidden;

  ${mediaSmall`top: calc(${smallMapHeight} - 60px)`};
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

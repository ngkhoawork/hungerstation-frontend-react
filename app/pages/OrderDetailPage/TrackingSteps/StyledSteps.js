import styled from 'styled-components';
import { dustyGray, jade } from 'utils/css/colors';
import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import {
  mediaMedium,
  mediaMediumGreater,
  sidePosition,
  sideMargin,
  sidePadding,
} from 'utils/css/styles';
import Button from 'components/Button';

export const StyledWrapper = styled.div`
  margin-top: 30px;
  position: relative;
`;

export const StyledStep = styled(Step)`
  display: flex !important;
  .rc-steps-item-content {
    display: flex !important;
    min-height: 64px !important;
    flex-grow: 0.8;
    flex-basis: 0;
    ${mediaMedium`flex-direction: column;`};

    .rc-steps-item-title {
      flex: 1;
      font-size: 16px;
      ${sidePadding('start', '5px;')};
      ${sidePadding('end', '0px;')};
    }
    .rc-steps-item-description {
      flex: 1;
      font-size: 14px;
      margin-top: 5px;
    }
  }
`;

export const StyledSteps = styled(Steps)`
  .rc-steps-item-tail {
    right: 13px;
  }
  .rc-steps-item-icon {
    ${sideMargin('start', '0')};
    ${sideMargin('end', '8px')};
  }

  .rc-steps-item-finish {
    .rc-steps-item-tail {
      &:after {
        background-color: #ffffff00;
        background-image: linear-gradient(${jade} 33%, #ffffff00 0%);
        background-position: right;
        background-size: 2px 7px;
        background-repeat: repeat-y;
        width: 2px;
      }
    }

    .rc-steps-item-content {
      .rc-steps-item-title {
        color: #000;
        font-weight: normal;
      }
      .rc-steps-item-description {
        color: ${dustyGray};
      }
    }
  }

  .rc-steps-item-process {
    .rc-steps-item-tail {
      &:after {
        background-color: #ffffff00;
        background-image: linear-gradient(${jade} 33%, #ffffff00 0%);
        background-position: right;
        background-size: 2px 7px;
        background-repeat: repeat-y;
        width: 2px;
      }
    }

    .rc-steps-item-content {
      .rc-steps-item-title {
        color: #000;
        font-weight: normal;
      }
      .rc-steps-item-description {
        color: ${dustyGray};
      }
    }
  }

  .rc-steps-item-wait {
    .rc-steps-item-tail {
      &:after {
        background-color: #ffffff00;
        background-image: linear-gradient(${dustyGray} 33%, #ffffff00 0%);
        background-position: right;
        background-size: 2px 7px;
        background-repeat: repeat-y;
        width: 2px;
      }
    }
    .rc-steps-item-content {
      .rc-steps-item-title {
        color: ${dustyGray};
        font-weight: normal;
      }
      .rc-steps-item-description {
        color: ${dustyGray};
      }
    }
  }
`;

export const StyledIcon = styled.span`
  display: block;
  border: ${({ isProgress }) =>
    isProgress ? '1px solid #ccc' : `1px solid ${jade}`};
  background: ${({ isProgress }) => (isProgress ? '#ccc' : `${jade}`)};
  color: #fff;
  width: 26px;
  height: 26px;
  line-height: 22px;
  text-align: center;
  border-radius: 26px;
  font-size: 14px;
  transition: background-color 0.3s, border-color 0.3s;
`;

export const TrackButton = styled(Button)`
  position: absolute;
  width: 100px;
  height: 40px;
  top: 80px;
  ${sidePosition('end', 0)};
  ${mediaMediumGreater`display: none;`};
`;

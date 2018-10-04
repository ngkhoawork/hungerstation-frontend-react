import styled from 'styled-components';
import { flexBox, mediaSmall } from 'utils/css/styles';
import PhoneVisual from 'images/phone-visual.png';
import PhoneVisualSmall from 'images/phone-visual-small.png';
import { wildSant } from 'utils/css/colors';

const StyledSection = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'center' },
    `
    width: 100%;
    border-radius: 8px;
    margin-bottom: 50px;
    padding: 0 0 40px;
    position: relative;
    margin-top: 50px;
    &:first-of-type {
      margin-top: 130px;
      margin-bottom: 0;
      padding: 0;
    }
    `,
  )};
  ${mediaSmall`
    &:first-of-type {
      margin-top: 80px;
    }
  `};
  ${mediaSmall`
  flex-direction: column;
  align-items: center;
  ${({ hasBackground }) =>
    hasBackground &&
    `
      background-image: url(${PhoneVisualSmall});
      padding-bottom: 320px;
      background-position-y: calc(100% + 55px);
      overflow: visible;
    `}
  `};
  ${({ hasBackground }) =>
    hasBackground &&
    `
    background-image: url(${PhoneVisual});
    background-size: 90%;
    background-position: right bottom;
    background-color: ${wildSant}
  `};
`;

export default StyledSection;

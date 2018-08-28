import styled from 'styled-components';
import { flexBox, mediaSmall } from 'utils/styles';
import PhoneVisual from 'images/phone-visual.png';
import PhoneVisualSmall from 'images/phone-visual-small.png';
import { wildSant } from 'utils/colors';

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
  flex-direction: column;
  align-items: center;
  ${({ hasBackground }) =>
    hasBackground &&
    `
      background-image: url(${PhoneVisualSmall});
      padding-bottom: 400px;
      background-size: 80%;
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

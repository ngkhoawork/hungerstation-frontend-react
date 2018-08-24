import styled from 'styled-components';
import { flexBox, mediaMedium, mediaLess } from 'utils/styles';
import PhoneVisual from 'images/phone-visual.png';
import { hintOfRed } from 'utils/colors';

const StyledSection = styled.div`
  flex-direction: ${({ direction }) =>
    direction === 'reversed' ? 'row-reverse' : 'row'};
  ${flexBox({
    align: 'flex-start',
    justify: 'space-between',
  })};
  width: 100%;
  background-image: url(${({ background }) =>
    background ? PhoneVisual : null});
  background-color: ${({ background }) =>
    background ? hintOfRed : 'transparent'};
  background-position: right bottom;
  background-size: 100%;
  margin-top: 80px;
  padding: ${({ background }) => (background ? '9% 0' : '0')};
  &:nth-of-type(2) {
    margin-top: 240px;
  }
  ${mediaMedium`
    &:nth-of-type(2) {
      margin-top: 150px;
    }
  `};
  ${mediaLess(560)`
    &:nth-of-type(2) {
      margin-top: 150px;
    }
  `};
`;

export default StyledSection;

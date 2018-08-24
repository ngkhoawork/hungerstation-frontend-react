import styled from 'styled-components';
import { flexBox } from 'utils/styles';
import PhoneVisual from 'images/phone-visual.png';
import { hintOfRed } from 'utils/colors';

const StyledSection = styled.div`
  flex-direction: ${({ direction }) =>
    direction === 'reversed' ? 'row-reverse' : 'row'};
  ${flexBox({
    align: 'center',
    justify: 'center',
  })};
  width: 100%;
  position: relative;
  background-image: url(${({ background }) =>
    background ? PhoneVisual : null});
  background-color: ${({ background }) =>
    background ? hintOfRed : 'transparent'};
  background-position: right bottom;
  background-size: 100%;
  margin: 50px;
  padding: 10% 3%;
`;

export default StyledSection;

import styled from 'styled-components';
import { flexBox } from 'utils/styles';
import PhoneVisual from 'images/phone-visual.png';
import { hintOfRed } from 'utils/colors';

const StyledSection = styled.div`
  flex-direction: ${({ direction }) =>
    direction === 'reversed' ? 'row-reverse' : 'row'};
  ${flexBox({
    align: 'flex-start',
    justify: 'center',
  })};
  width: 100%;
  background-image: url(${({ background }) =>
    background ? PhoneVisual : null});
  background-color: ${({ background }) =>
    background ? hintOfRed : 'transparent'};
  background-position: right bottom;
  background-size: 100%;
  margin-top: 50px;
  padding: ${({ background }) => (background ? '10% 3%' : '0')};
  &:nth-of-type(2) {
    margin-top: 240px;
  }
`;

export default StyledSection;

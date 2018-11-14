import styled from 'styled-components';
import { mediaMedium } from 'utils/css/styles';
import { fontFamilyRegular } from 'utils/css/variables';

export const Answer = styled.div`
  height: 38px;
  width: 624px;
  opacity: 0.6;
  color: #6f6e6b;
  font-family: ${fontFamilyRegular};
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.44px;
  line-height: 20px;
  word-wrap: break-word;
  margin-top: 10px;
  margin-bottom: 20px;

  ${mediaMedium`
    width: 300px;
    margin-bottom: 42%;
  `};
`;

export const Line = styled.div`
  box-sizing: border-box;
  height: 1px;
  width: 611.18px;
  border: 1px solid #bababa;
  opacity: 0.22;
  margin-top: 50px;
  margin-bottom: 20px;

  ${mediaMedium`
    width: 330px;
    margin-bottom: 15%;
  `};
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 20px;
<<<<<<< HEAD

  ${mediaMedium`width: 100%;`};
=======
  padding-right: 40%;
  ${mediaMedium`
    width: 330px;
  `};
>>>>>>> change fetching data
`;

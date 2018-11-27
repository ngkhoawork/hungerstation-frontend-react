import styled from 'styled-components';
import { mediaMedium, mediaLargeGreater, flex } from 'utils/css/styles';
import { fuscousGray } from 'utils/css/colors';
import { fontFamilyLight } from 'utils/css/variables';

export const Wrapper = styled.section`
  border-radius: 0 0 8px 8px;
  background-color: white;
  padding: 20px 20px 30px 20px;
  box-shadow: 0 0 35px 5px rgba(183, 157, 157, 0.1);
  max-width: 353px;
  ${flex({ direction: 'column', grow: 0, shrink: 0, basis: '353px' })};

  ${({ isModal }) =>
    isModal &&
    `
    box-shadow: none;
    justify-content: space-between;
    flex-grow: 1;
    padding: 0 10px !important;
  `};

  ${mediaMedium`
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    box-shadow: none;
    padding: 20px 0;
    ${({ isModal }) => !isModal && `margin-bottom: 10px;`};
  `};

  ${mediaLargeGreater`min-width: 353px;`};
`;

export const titleStyle = {
  textAlign: 'center',
  marginBottom: 15,
};

export const noticeStyle = {
  margin: '10px 0',
};

export const From = styled.div`
  color: ${fuscousGray};
  font-family: ${fontFamilyLight};
  font-size: 16px;
  line-height: 17px;
  letter-spacing: 0.22px;
  text-align: center;
`;

export const Unshrinkable = styled.div`
  ${flex({ shrink: 0 }, false)};

  ${({ isModal }) => isModal && `margin-right: 40px;`};
`;

export const Items = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 130px;
  min-height: 70px;
  flex-shrink: 0;

  ${({ isModal }) =>
    isModal &&
    `
    max-height: initial;
    flex-shrink: 1;
    margin-bottom: 20px;
  `};
`;

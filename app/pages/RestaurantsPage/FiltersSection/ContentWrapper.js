import styled from 'styled-components';

const ContentWrapper = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export default ContentWrapper;

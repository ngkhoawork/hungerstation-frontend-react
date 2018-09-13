import styled from 'styled-components';
import { flexBox, mediaSmall } from 'utils/styles';
import { Link } from 'react-router-dom';

export const CenteredContent = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-evenly' },
    `
      > * {
        margin: 0 8px;
      }
    `,
  )};
`;

export const StyledForm = styled.form`
  width: 70%;
  ${mediaSmall`
    width: 95%;
  `};
`;

export const StyledPage = styled.div`
  ${flexBox({
    align: 'center',
    direction: 'column',
    justify: 'flex-start',
  })};

  font-family: 'HungerStation-Regular', sans-serif;
  padding: 57px;
  background-color: #fff;
  border-radius: 8px;
  width: 50%;

  ${mediaSmall`
    padding: 0 10px;
    width: 95%;
    padding: 50px 10px;
  `};
`;

export const StyledLink = styled(Link)`
  color: ${({ color }) => color};
  text-decoration: none;
  margin: 0;
`;

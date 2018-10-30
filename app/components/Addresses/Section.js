import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from 'components/Typography';

const Container = styled.section`
  margin-bottom: 40px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title fontSize={20} letterSpacing={0.28} style={{ marginBottom: 30 }}>
      {title}
    </Title>
    {children}
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

export default Section;

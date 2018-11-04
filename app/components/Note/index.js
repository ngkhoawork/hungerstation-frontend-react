import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import TextField from '@material-ui/core/TextField';
import intl from 'utils/intlService';
import { flex, mediaMedium } from 'utils/css/styles';
import { stepIndent } from 'utils/css/variables';
import { Title, Description } from 'components/Typography';
import messages from './messages';

const Container = styled.div`
  ${flex({ align: 'center' })};

  ${mediaMedium`
    ${flex({ direction: 'column', align: 'flex-start' }, false)};
  `};

  ${({ style }) => style && css(style)};
`;

const Header = styled.div`
  ${flex({ shrink: 0 }, false)};
  width: ${stepIndent};
`;

const Note = ({ note, style }) => (
  <Container style={style}>
    <Header>
      <Description style={{ margin: 0 }}>
        {intl.formatMessage(messages.optional)}
      </Description>
      <Title>{intl.formatMessage(messages.notes)}</Title>
    </Header>
    <TextField
      type="text"
      defaultValue={note}
      label={intl.formatMessage(messages.instructions)}
      fullWidth
    />
  </Container>
);

Note.propTypes = {
  note: PropTypes.string,
  style: PropTypes.object,
};

export default Note;

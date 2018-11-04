import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  flex,
  borderBottom,
  mediaMedium,
  mediaLargeGreater,
} from 'utils/css/styles';
import { stepIndent } from 'utils/css/variables';
import { fuscousGray, silverChalice } from 'utils/css/colors';
import intl from 'utils/intlService';
import { Title } from 'components/Typography';
import messages from './messages';

const Step = ({ title, stepNo, stepCount, children }) => (
  <Container>
    <Header>
      <Index>
        <StepNo>{`${intl.formatMessage(messages.step)} ${stepNo}`}</StepNo>
        <StepCount>
          {` - ${intl.formatMessage(messages.of)} ${stepCount}`}
        </StepCount>
      </Index>
      <Title>{title}</Title>
    </Header>
    <Content>{children}</Content>
  </Container>
);

Step.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  stepNo: PropTypes.number.isRequired,
  stepCount: PropTypes.number.isRequired,
};

export default Step;

const Container = styled.section`
  margin-bottom: 30px;
`;

const Header = styled.div`
  ${flex({ align: 'center' })};
  ${borderBottom};
  padding: 30px 0;

  ${mediaMedium`
    ${flex({ align: 'flex-start', direction: 'column' }, false)};
  `};
`;

const Index = styled.span`
  width: ${stepIndent};
  font-size: 14px;
  line-height: 1;

  ${mediaMedium`margin-bottom: 5px;`};
`;

const StepNo = styled.span`
  color: ${fuscousGray};
`;

const StepCount = styled.span`
  color: ${silverChalice};
`;

const Content = styled.div`
  padding: 30px 0;

  ${mediaLargeGreater`
    padding-left: ${stepIndent};
  `};
`;

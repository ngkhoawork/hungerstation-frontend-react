import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { wildSand } from 'utils/css/colors';
import intl from 'utils/intlService';

import Paragraph from 'components/Paragraph';

import { selectDynamicFilters } from 'modules/restaurants/selectors';
import { resetChosenFiltersAction } from 'modules/restaurants/actions';

import messages from './messages';
import ClearAll from '../ClearAll';

const decorate = connect(
  state => ({
    dynamicFilters: selectDynamicFilters(state),
  }),
  {
    resetChosenFiltersAction,
  },
);

const Header = ({
  resetChosenFiltersAction: resetFilters,
  withClear = false,
  dynamicFilters = [],
}) => (
  <Wrapper>
    <StyledHeader>
      <Paragraph size={22}>{intl.formatMessage(messages.filters)}</Paragraph>
      {withClear && <ClearAll resetFilters={resetFilters} />}
    </StyledHeader>

    <DynamicFiltersSection>
      {dynamicFilters.map(name => <FilterName key={name}>{name}</FilterName>)}
    </DynamicFiltersSection>
  </Wrapper>
);

Header.propTypes = {
  resetChosenFiltersAction: PropTypes.func,
  dynamicFilters: PropTypes.array,
  withClear: PropTypes.bool,
};

export default decorate(Header);

const Wrapper = styled.div`
  border-bottom: 1px solid ${wildSand};
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding-bottom: 16px;
  margin-top: 5px;
`;

const DynamicFiltersSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 16px;
`;

const FilterName = styled.span`
  color: #6f6e6b;
  font-family: 'HungerStation-Light', sans-serif;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.44px;
  line-height: 16px;
  padding-right: 8px;
`;

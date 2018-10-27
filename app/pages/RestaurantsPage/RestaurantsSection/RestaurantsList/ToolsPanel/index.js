import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { flexBox, mediaLess } from 'utils/css/styles';
import { wildSand } from 'utils/css/colors';
import { searchRestaurantAction } from 'modules/restaurants/actions';

import Tags from 'pages/RestaurantsPage/FiltersSection/Tags';
import Icon from 'components/Icon';
import SearchInput from './SearchInput';

const decorate = connect(
  null,
  { searchRestaurantAction },
);

const ToolsPanel = ({ searchRestaurantAction }) => (
  <Wrapper>
    <StyledToolUndisplayedInMobile>
      <Tags />
    </StyledToolUndisplayedInMobile>

    <StyledTool>
      <IconPositioning>
        <Icon name="magnifying-glass" size={18} />
      </IconPositioning>
      <SearchInput searchRestaurantAction={searchRestaurantAction} />
    </StyledTool>
  </Wrapper>
);

export default decorate(ToolsPanel);

ToolsPanel.propTypes = {
  searchRestaurantAction: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  ${flexBox(
    { align: 'center', justify: 'flex-end' },
    `
    width: 100%;
    padding-top: 20px;
    margin-bottom: 50px;
    border-top: 1px solid ${wildSand};
  `,
  )};
  ${mediaLess(600)`
    margin-bottom: 10px;
  `};
`;

const StyledTool = styled.div`
  display: flex;
  width: 360px;
`;

const StyledToolUndisplayedInMobile = styled(StyledTool)`
  ${mediaLess(600)`
  display: none;
`};
`;

const IconPositioning = styled.div`
  position: absolute;
  top: 30px;

  ${mediaLess(600)`
  top: 44px;
`};
`;

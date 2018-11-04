import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { flex, mediaLess } from 'utils/css/styles';
import { wildSand } from 'utils/css/colors';
import { searchRestaurantAction } from 'modules/restaurants/actions';
import { selectSearchString } from 'modules/restaurants/selectors';
import Tags from 'pages/RestaurantsPage/FiltersSection/Tags';
import Icon from 'components/Icon';
import SearchInput from './SearchInput';

const StyledTool = styled.div`
  display: flex;
  width: 360px;
`;

const StyledToolUndisplayedInMobile = styled(StyledTool)`
  width: auto;

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

const Wrapper = styled.div`
  ${flex({ align: 'center', justify: 'space-between' })};
  width: 100%;
  padding-top: 20px;
  margin-bottom: 50px;
  border-top: 1px solid ${wildSand};

  ${mediaLess(600)`
    margin-bottom: 10px;
  `};
`;

const decorate = connect(
  state => ({ search: selectSearchString(state) }),
  { searchRestaurantAction },
);

const ToolsPanel = ({ hasData, searchRestaurantAction, search }) => (
  <Wrapper>
    <StyledToolUndisplayedInMobile>
      <Tags />
    </StyledToolUndisplayedInMobile>
    {(search || hasData) && (
      <StyledTool>
        <IconPositioning>
          <Icon name="magnifying-glass" size={18} />
        </IconPositioning>
        <SearchInput searchRestaurantAction={searchRestaurantAction} />
      </StyledTool>
    )}
  </Wrapper>
);

ToolsPanel.propTypes = {
  hasData: PropTypes.bool,
  search: PropTypes.string,
  searchRestaurantAction: PropTypes.func.isRequired,
};

export default decorate(ToolsPanel);

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { flex, mediaLess, mediaMedium } from 'utils/css/styles';
import { wildSand } from 'utils/css/colors';
import { transitionDuration } from 'utils/css/variables';
import { searchRestaurantAction } from 'modules/restaurants/actions';
import { selectSearchString } from 'modules/restaurants/selectors';
import Tags from 'pages/RestaurantsPage/FiltersSection/Tags';
import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import SearchInput from './SearchInput';

const StyledTool = styled.div`
  display: flex;
  width: ${({ hasFocus }) => (hasFocus ? 360 : 40)}px;
  transition: width ${transitionDuration};
  position: relative;

  ${mediaMedium`
    width: ${({ hasFocus }) => (hasFocus ? '100%' : '40px')};
  `};
`;

const StyledToolUndisplayedInMobile = styled(StyledTool)`
  width: auto;
  margin-top: 5px;

  ${mediaLess(600)`
    display: none;
  `};
`;

const IconPositioning = styled.div`
  position: absolute;
  top: 8px;
`;

const Wrapper = styled.div`
  ${flex({ align: 'flex-start', justify: 'space-between' })};
  width: 100%;
  border-top: 1px solid ${wildSand};
  height: 60px;
  padding-top: 20px;
  margin-bottom: 50px;

  ${mediaMedium`
    margin-bottom: 20px;
    justify-content: flex-end;
  `};
`;

const searchIconWrapperCss = css`
  position: absolute;
  top: -4px;
`;

class ToolsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isSearchFocused: false };
    this.inputRef = React.createRef();
  }

  handleSearchFocus = () => {
    this.inputRef.current.focus();
    this.setState({ isSearchFocused: true });
  };

  handleBlur = () => {
    if (!this.props.search.length) this.setState({ isSearchFocused: false });
  };

  renderSearchIcon = () => {
    if (!this.state.isSearchFocused) {
      return (
        <CircledItem
          color={wildSand}
          inline
          width={40}
          css={searchIconWrapperCss}
          onClick={this.handleSearchFocus}
        >
          <Icon name="magnifying-glass" size={18} />
        </CircledItem>
      );
    }

    return (
      <IconPositioning>
        <Icon name="magnifying-glass" size={18} />
      </IconPositioning>
    );
  };

  render() {
    const { hasData, searchRestaurantAction, search } = this.props;
    const { isSearchFocused } = this.state;

    return (
      <Wrapper>
        <StyledToolUndisplayedInMobile>
          <Tags />
        </StyledToolUndisplayedInMobile>
        {(search || hasData) && (
          <StyledTool hasFocus={isSearchFocused}>
            {this.renderSearchIcon()}
            <SearchInput
              searchRestaurantAction={searchRestaurantAction}
              onBlur={this.handleBlur}
              innerRef={this.inputRef}
              hasFocus={isSearchFocused}
            />
          </StyledTool>
        )}
      </Wrapper>
    );
  }
}

ToolsPanel.propTypes = {
  hasData: PropTypes.bool,
  search: PropTypes.string,
  searchRestaurantAction: PropTypes.func.isRequired,
};

export default connect(
  state => ({ search: selectSearchString(state) }),
  { searchRestaurantAction },
)(ToolsPanel);

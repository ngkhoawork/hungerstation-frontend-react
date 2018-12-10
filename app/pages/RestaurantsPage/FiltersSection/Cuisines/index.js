import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';

import { fuscousGray, silverChalice, lighterGray } from 'utils/css/colors';
import { fontFamilyRegular } from 'utils/css/variables';
import { sideMargin } from 'utils/css/styles';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import Group from 'components/Group';
import CategoryTitle from '../CategoryTitle';
import { StyledFiltersCategoryWrapper, StyledItem } from '../Styled';
import {
  StyledExpandActionWrapper,
  StyledIconImage,
  StyledKitchenItemsWrapper,
} from './Styled';
import AllCuisinesItem from './AllCuisines';
import messages from './messages';

const Cuisine = styled.p`
  font-family: ${fontFamilyRegular};
  font-size: 14px;
  color: ${({ color }) => color || fuscousGray};
  ${sideMargin('start', '10px')};
  ${sideMargin('start', '10px')};
`;

class Cuisines extends React.Component {
  state = { expanded: false };

  toggleExpand = () =>
    this.setState(prevState => ({ expanded: !prevState.expanded }));

  render() {
    const { kitchens, chosenKitchens, toggleFilter, title } = this.props;
    const { expanded } = this.state;
    const visibleKitchensInFilterBox = expanded
      ? kitchens
      : kitchens.slice(0, 3);
    return (
      <StyledFiltersCategoryWrapper>
        <CategoryTitle
          title={title}
          selectionQuantity={chosenKitchens.length}
        />

        <StyledKitchenItemsWrapper expanded={expanded}>
          <AllCuisinesItem isSelected={chosenKitchens.length === 0} />
          {visibleKitchensInFilterBox.map(
            ({ id, name, image_thumb }, index) => {
              const isSelected = chosenKitchens.includes(id);
              const isPreviousSelected = chosenKitchens.includes(
                kitchens[index - 1] && kitchens[index - 1].id,
              );
              const isNextSelected = chosenKitchens.includes(
                kitchens[index + 1] && kitchens[index + 1].id,
              );
              return (
                <StyledItem
                  key={id}
                  selected={isSelected}
                  isPreviousSelected={isPreviousSelected}
                  isNextSelected={isNextSelected}
                  onClick={() =>
                    toggleFilter({ filterKey: 'kitchens', value: id })
                  }
                >
                  <Group>
                    <CircledItem color={lighterGray} width={28}>
                      <StyledIconImage src={image_thumb} alt="x" />
                    </CircledItem>
                    <Cuisine color={isSelected ? 'black' : silverChalice}>
                      {name}
                    </Cuisine>
                  </Group>
                  {isSelected && <Icon name="check-mark-green" />}
                </StyledItem>
              );
            },
          )}
        </StyledKitchenItemsWrapper>

        <StyledExpandActionWrapper
          onClick={this.toggleExpand}
          isExpanded={expanded}
        >
          <Paragraph>
            {expanded
              ? intl.formatMessage(messages.less)
              : intl.formatMessage(messages.more)}
          </Paragraph>
          <Icon name="arrow-circled" size={13} />
        </StyledExpandActionWrapper>
      </StyledFiltersCategoryWrapper>
    );
  }
}
Cuisines.propTypes = {
  kitchens: PropTypes.array,
  title: PropTypes.string,
  chosenKitchens: PropTypes.array,
  toggleFilter: PropTypes.func,
};

export default Cuisines;

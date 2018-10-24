import React from 'react';
import PropTypes from 'prop-types';
import { wildSand, silverChalice } from 'utils/css/colors';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import Group from 'components/Group';
import CategoryTitle from '../CategoryTitle';
import { StyledFiltersCategoryWrapper, StyledItem } from '../Styled';
import {
  StyledExpandActionWrapper,
  StyledIconImage,
  SltyledKitchenItemsWrapper,
} from './Styled';
import AllCussinesItem from './AllCusines';

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

        <SltyledKitchenItemsWrapper expanded={expanded}>
          <AllCussinesItem isSelected={chosenKitchens.length === 0} />
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
                    <CircledItem color={wildSand} width={28}>
                      <StyledIconImage src={image_thumb} alt="x" />
                    </CircledItem>
                    <Paragraph
                      color={isSelected ? 'black' : silverChalice}
                      margin="0 0 -3px 10px"
                    >
                      {name}
                    </Paragraph>
                  </Group>
                  {isSelected && <Icon name="check" />}
                </StyledItem>
              );
            },
          )}
        </SltyledKitchenItemsWrapper>

        <StyledExpandActionWrapper
          onClick={this.toggleExpand}
          isExpanded={expanded}
        >
          <Paragraph>{expanded ? 'Less' : 'More'}</Paragraph>
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

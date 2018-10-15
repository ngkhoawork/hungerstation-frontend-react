import React from 'react';
import PropTypes from 'prop-types';
import { wildSand, silverChalice } from 'utils/css/colors';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import Group from 'components/Group';
import CategoryTitle from '../CategoryTitle';
import { StyledFiltersContainer, StyledItem } from '../Styled';
import {
  StyledExpandActionWrapper,
  StyledIconImage,
  SltyledKitchenItemsWrapper,
} from './Styled';

class Cuisines extends React.Component {
  state = { expanded: false };

  toggleExpand = () =>
    this.setState(prevState => ({ expanded: !prevState.expanded }));

  render() {
    const { kitchens, chosenKitchens, toggleFilter, title } = this.props;
    const { expanded } = this.state;
    return (
      <StyledFiltersContainer>
        <CategoryTitle
          title={title}
          selectionQuantity={chosenKitchens.length}
        />

        <SltyledKitchenItemsWrapper expanded={expanded}>
          {kitchens.map(({ id, name, image_thumb }) => (
            <StyledItem
              key={id}
              onClick={() => toggleFilter({ filterKey: 'kitchens', value: id })}
            >
              <Group>
                <CircledItem color={wildSand} width={28}>
                  <StyledIconImage src={image_thumb} alt="x" />
                </CircledItem>
                <Paragraph
                  color={chosenKitchens.includes(id) ? 'black' : silverChalice}
                  margin="0 0 -3px 10px"
                >
                  {name}
                </Paragraph>
              </Group>
              {chosenKitchens.includes(id) && <Icon name="check" />}
            </StyledItem>
          ))}
        </SltyledKitchenItemsWrapper>

        <StyledExpandActionWrapper
          onClick={this.toggleExpand}
          isExpanded={expanded}
        >
          <Paragraph>{expanded ? 'Less' : 'More'}</Paragraph>
          <Icon name="arrow-circled" size={13} />
        </StyledExpandActionWrapper>
      </StyledFiltersContainer>
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

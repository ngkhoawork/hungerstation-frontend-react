import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { silverChalice, boulder } from 'utils/css/colors';
import { debounce } from 'utils/perf';
import { toggleFilterAction } from 'modules/restaurants/actions';

import Paragraph from 'components/Paragraph';
import StyledOrderItem from './StyledOrderItem';
import StyledSliderContainer from './StyledSliderContainer';
import StyledLabel from './StyledLabel';
import StyledInput from './StyledInput';

const decorate = connect(
  null,
  { toggleFilterAction },
);

class OrderItem extends React.Component {
  state = {
    // eslint-disable-next-line
    value: this.props.range.min, // state based on props is basicaly antipattern, but if it is a static prop it can be passed to state
  };

  handleOnChange = ({ target: { value } }) => {
    const { toggleFilterAction, filterKey } = this.props;
    this.setState({ value });
    debounce(toggleFilterAction({ filterKey, value: +value }), 100);
  };

  render() {
    const { label, range } = this.props;
    const { value } = this.state;
    return (
      <StyledOrderItem>
        <StyledSliderContainer>
          <StyledLabel>
            <Paragraph light color={silverChalice}>
              {label}
            </Paragraph>
            <Paragraph color={boulder}>{value}</Paragraph>
          </StyledLabel>
          <StyledInput
            onChange={this.handleOnChange}
            min={range.min}
            max={range.max}
            value={value}
          />
        </StyledSliderContainer>
      </StyledOrderItem>
    );
  }
}

OrderItem.propTypes = {
  label: PropTypes.string.isRequired,
  range: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
  filterKey: PropTypes.string.isRequired,
  toggleFilterAction: PropTypes.func,
};

export default decorate(OrderItem);

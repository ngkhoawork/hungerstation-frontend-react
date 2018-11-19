import React from 'react';
import PropTypes from 'prop-types';
import { silverChalice, boulder } from 'utils/css/colors';
import { debounce } from 'utils/perf';

import Paragraph from 'components/Paragraph';
import StyledOrderItem from './StyledOrderItem';
import StyledSliderContainer from './StyledSliderContainer';
import StyledLabel from './StyledLabel';
import StyledInput from './StyledInput';

class OrderItem extends React.Component {
  constructor(props) {
    super();
    this.state = { value: props.value };
    this.toggleFilterAction = debounce(props.toggleFilterAction, 200);
  }

  static getDerivedStateFromProps({ value }, state) {
    if (value !== state.prevPropsValue) {
      return { value, prevPropsValue: value };
    }

    return null;
  }

  handleOnChange = ({ target: { value } }) => {
    this.setState({ value });
    const { filterKey } = this.props;
    this.toggleFilterAction({ filterKey, value: +value });
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
  value: PropTypes.number,
};

export default OrderItem;

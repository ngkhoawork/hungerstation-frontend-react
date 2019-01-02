import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'utils/perf';
import { sidePosition } from 'utils/css/styles';
import styled from 'styled-components';
import {
  StyledOrderItem,
  Name,
  StyledSliderContainer,
  RangeContainer,
  Number,
  StyledInput,
  RangeProgressBar,
  rangeValueCss,
} from './StyledComponents';

const getPercent = ({ min, max }, value) => (value / (max - min)) * 100;

class OrderItem extends React.Component {
  constructor(props) {
    super();
    this.state = { value: props.value };
    this.toggleFilterAction = debounce(props.toggleFilterAction, 300);
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
    const percent = getPercent(range, value);

    const RangeValue = styled.div`
      ${rangeValueCss};
      ${sidePosition('start', `calc(${percent}% - ${(percent / 100) * 24}px)`)};
    `;

    return (
      <StyledOrderItem>
        <Name>{label}</Name>
        <StyledSliderContainer>
          <Number>{range.min}</Number>
          <RangeContainer>
            <StyledInput
              onChange={this.handleOnChange}
              min={range.min}
              max={range.max}
              value={value}
            />
            <RangeProgressBar style={{ width: `${percent}%` }} />
            <RangeValue>{value}</RangeValue>
          </RangeContainer>
          <Number>{range.max}</Number>
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

import React from 'react';

import Button from 'components/Button';
import intl from 'utils/intlService';
import DropdownInput from './DropdownInput';
import LocateYourself from './LocateYourself';
import * as Styled from './StyledComponents';

import messages from './messages';

const SearchBar = ({
  selectedCity,
  cities,
  districts,
  selectCity,
  selectDistrict,
  selectedDistrict,
  handleSubmit,
  isSubmitting,
  hideSearch,
  ...rest
}) => (
  <Styled.Bar shrink={hideSearch}>
    <DropdownInput
      placeholder={intl.formatMessage(messages.city)}
      iconName="pin"
      suggestions={cities}
      onChange={selectCity}
      selectedItem={selectedCity}
      enableAutoComplete
    />
    <DropdownInput
      placeholder={intl.formatMessage(messages.district)}
      iconName="district"
      suggestions={districts}
      onChange={selectDistrict}
      selectedItem={selectedDistrict}
      disabled={!selectedCity}
      enableAutoComplete
    />
    <LocateYourself {...rest} />
    <Styled.BarActions>
      {!hideSearch && (
        <Styled.ButtonWrapper onClick={isSubmitting ? null : handleSubmit}>
          <Button
            label={intl.formatMessage(messages.search)}
            border="right"
            disabled={isSubmitting}
            loading={isSubmitting}
          />
        </Styled.ButtonWrapper>
      )}
    </Styled.BarActions>
  </Styled.Bar>
);

export default SearchBar;

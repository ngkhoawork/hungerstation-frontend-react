import React from 'react';
import styled from 'styled-components';
import TextItem from 'components/TextItem';
import Icon from 'components/Icon';
import { sideMargin } from 'utils/css/styles';

const TextInner = styled.span`
  ${sideMargin('start', '3px')};
  [dir='rtl'] & {
    margin-right: 3px;
  }
  vertical-align: top;
  line-height: 16px;
`;

const Checkbox = ({ field, label }) => (
  <label htmlFor="checkbox">
    <input {...field} id="checkbox" type="checkbox" hidden />
    <TextItem size={14} fontFamily="regular">
      <Icon
        name={field.value ? 'checkbox-checked' : 'checkbox-unchecked'}
        size={16}
      />
      <TextInner>{label}</TextInner>
    </TextItem>
  </label>
);

export default Checkbox;

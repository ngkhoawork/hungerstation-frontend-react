import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const styles = () => ({
  button: {
    marginTop: '25px',
    marginBottom: '25px',
    borderRadius: '8px',
  },
});

export const flexBox = ({ align, justify, direction }, ...args) => {
  const flexProps = `
    display: flex;
    ${align ? `align-items: ${align}` : null};
    ${justify ? `justify-content: ${justify}` : null};
    ${direction ? `flex-direction: ${direction}` : 'row'};
  `;
  return css`
    ${css(...flexProps, ...args)};
  `;
};

const getMedia = dimension => size => (...args) => css`
  ${media[dimension](`${size}px`)`
    ${css(...args)};
  `};
`;

export const mediaLess = getMedia('lessThan');
export const mediaGreater = getMedia('greaterThan');

export const mediaSmall = mediaLess(560);
export const mediaMedium = mediaLess(850);
export const mediaLarge = mediaLess(1130);

const getNestedInterpolation = (...args) => css`
  ${css(...args)};
`;

export const getStyledTag = tag => (...args) => styled[tag]`
  ${getNestedInterpolation(args)};
`;

export const getStyledDiv = getStyledTag('div');

export default styles;

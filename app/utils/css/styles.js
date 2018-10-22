import { css } from 'styled-components';
import media from 'styled-media-query';

const styles = () => ({
  button: {
    marginTop: '35px',
    marginBottom: '35px',
    borderRadius: '8px',
    height: '56px',
    fontSize: '16px',
    fontWeight: 300,
  },
  buttonText: {
    display: 'inline-block',
    fontSize: '20px',
    lineHeight: '1.3em',
    height: '20px',
  },
  buttonIcon: {
    marginRight: '4px',
  },
  fieldWrapper: {
    marginBottom: '8px',
  },
});

export const fontCorrection = css`
  padding-top: 3px;
`;

export const flex = ({ align, justify, direction }) => css`
  display: flex;
  ${align ? `align-items: ${align}` : 'stretch'};
  ${justify ? `justify-content: ${justify}` : 'flex-start'};
  ${direction ? `flex-direction: ${direction}` : 'row'};
`;

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

export const device = {
  retina: (...args) => css`
    @media (-webkit-min-device-pixel-ratio: 1.25),
      (-o-min-device-pixel-ratio: 5/4),
      (min-resolution: 120dpi),
      (min-resolution: 1.25dppx) {
      ${css(...args)};
    }
  `,
  retina3x: (...args) => css`
    @media (-webkit-min-device-pixel-ratio: 2.25),
      (-o-min-device-pixel-ratio: 9/4),
      (min-resolution: 216dpi),
      (min-resolution: 2.25dppx) {
      ${css(...args)};
    }
  `,
};

export const mediaLess = getMedia('lessThan');
export const mediaGreater = getMedia('greaterThan');

export const mediaSmall = mediaLess(560);
export const mediaMedium = mediaLess(850);
export const mediaMediumGreater = mediaGreater(849);
export const mediaLarge = mediaLess(1130);

export const getDisplayProp = isModalOpened =>
  !isModalOpened &&
  `
    display: none;
  `;

export default styles;

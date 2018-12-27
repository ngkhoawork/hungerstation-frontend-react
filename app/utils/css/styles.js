import { css } from 'styled-components';
import media from 'styled-media-query';
import { lightGray } from './colors';

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
    lineHeight: '1em',
    height: '20px',
  },
  buttonIcon: {
    marginTop: '2px',
    marginRight: '4px',
  },
  fieldWrapper: {
    marginBottom: '8px',
  },
});

export const sideModal = () => props => css`
  direction: ${props.theme.direction};
`;

export const sideProperty = property => {
  const map = {
    ltr: { start: `${property}left`, end: `${property}right` },
    rtl: { start: `${property}right`, end: `${property}left` },
  };

  return (side, value) => props => css`
    ${map[props.theme.direction][side]}: ${value};
  `;
};

export const sidePosition = sideProperty('');
export const sideMargin = sideProperty('margin-');
export const sidePadding = sideProperty('padding-');

export const flex = (
  { align, justify, direction, wrap, grow, shrink, basis } = {},
  display = true,
) => css`
  ${display && 'display: flex;'};
  ${align && `align-items: ${align}`};
  ${justify && `justify-content: ${justify}`};
  ${direction && `flex-direction: ${direction}`};
  ${wrap && `flex-wrap: ${wrap}`};
  ${grow !== undefined && `flex-grow: ${grow}`};
  ${shrink !== undefined && `flex-shrink: ${shrink}`};
  ${basis !== undefined && `flex-basis: ${basis}`};
`;

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
export const rotateArrowIcon = () => {
  const map = {
    ltr: { rotate: `0deg` },
    rtl: { rotate: `180deg` },
  };
  return () => props => css`
    transform: rotate(${map[props.theme.direction].rotate});
  `;
};
export const mediaLess = getMedia('lessThan');
export const mediaGreater = getMedia('greaterThan');
const desktopWidth = 850;
export const mediaSmall = mediaLess(560);
export const mediaMedium = mediaLess(desktopWidth);
export const mediaMediumGreater = mediaGreater(desktopWidth - 1);
export const mediaLarge = mediaLess(1130);
export const mediaLargeGreater = mediaGreater(1129);

export function isMobile() {
  return window.matchMedia(`(max-width: ${desktopWidth - 1}px)`).matches;
}

export const getDisplayProp = isModalOpened =>
  !isModalOpened &&
  `
    display: none;
  `;

export const fontCorrection = css`
  padding-top: 3px;
`;
export const borderBottom = css`
  border-bottom: solid 1px ${lightGray};
`;

export const backgroundSuggestionMargin = value => {
  const map = {
    ltr: 'margin-left',
    rtl: 'margin-right',
  };
  const value1 = {
    ltr: value - 50,
    rtl: value,
  };
  return () => props => css`
    ${map[props.theme.direction]}: ${value1[props.theme.direction]}px;
  `;
};

export default styles;

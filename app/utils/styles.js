import { css } from 'styled-components';

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

export default styles;

import { createMuiTheme } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import { fuscousGray, grey, gold, redish, darkerGrey } from 'utils/colors';

const themeObj = {
  palette: {
    text: {
      primary: fuscousGray,
    },
  },
  typography: {
    fontFamily: `'HungerStation-Light', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    button: {
      textTransform: 'none',
    },
    caption: {
      fontFamily: `'HungerStation-Light', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
      color: fuscousGray,
    },
    display1: {
      fontFamily: `'HungerStation-Regular', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
      color: fuscousGray,
    },
  },
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiSelect: {
      select: {
        '&:focus': {
          background: 'none',
        },
      },
    },
    MuiButton: {
      // Name of the rule
      contained: {
        '&$disabled': {
          color: fuscousGray,
        },
      },
      containedPrimary: {
        backgroundColor: gold,
        color: fuscousGray,
        fontFamily: `'HungerStation-Regular', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
        boxShadow: '0 15px 20px -6px rgba(109, 22, 22, 0.1)',
        '&:hover': {
          backgroundColor: lighten(gold, 0.2),
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: grey,
        '&$focused': {
          color: grey,
        },
        '&$error': {
          color: redish,
        },
      },
    },
    MuiInput: {
      root: {
        fontFamily: 'HungerStation-Regular, sans-serif',
      },
      underline: {
        '&:after': {
          borderBottom: `1px solid ${darkerGrey}`,
        },
        '&$error:after': {
          borderBottomColor: redish,
          transform: 'scaleX(1)', // error is always underlined in red
        },
      },
    },
  },
};

export default createMuiTheme(themeObj);

import { createMuiTheme } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';

const themeObj = {
  palette: {
    text: {
      primary: '#434340',
    },
  },
  typography: {
    fontFamily: `'HungerStation-Light', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    button: {
      textTransform: 'none',
    },
    caption: {
      fontFamily: `'HungerStation-Light', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
      color: () => this.palette.text.primary,
    },
    display1: {
      fontFamily: `'HungerStation-Regular', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
      color: () => this.palette.text.primary,
    },
  },
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      containedPrimary: {
        // Some CSS
        backgroundColor: '#FFD700',
        borderRadius: 3,
        border: 0,
        color: '#434340',
        fontFamily: `'HungerStation-Regular', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
        height: 48,
        padding: '0 30px',
        // boxShadow: '0 15px 20px -6px rgba(109, 22, 22, 0.1)',
        '&:hover': {
          backgroundColor: lighten('#FFD700', 0.2),
          // Reset on touch devices, it doesn't add specificity
          // '@media (hover: none)': {
          //   backgroundColor: theme.palette.grey[300],
          // },
          // '&$disabled': {
          //   backgroundColor: theme.palette.action.disabledBackground,
          // },
        },
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: () => this.palette.text.primary,
        },
      },
    },
    MuiInput: {
      root: {
        fontFamily: 'HungerStation-Regular, sans-serif',
      },
      underline: {
        '&:after': {
          borderBottom: `2px solid #434340`,
        },
      },
    },
  },
};

export default createMuiTheme(themeObj);

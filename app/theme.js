import { createMuiTheme } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import {
  fuscousGray,
  silverChalice,
  gold,
  persimmon,
  dustyGray,
} from 'utils/colors';

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
    MuiSelect: {
      select: {
        '&:focus': {
          background: 'none',
        },
      },
    },
    MuiButton: {
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
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: gold,
          },
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: silverChalice,
        '&$focused': {
          color: silverChalice,
        },
        '&$error': {
          color: persimmon,
        },
      },
    },
    MuiInput: {
      root: {
        fontFamily: 'HungerStation-Regular, sans-serif',
        marginBottom: '20px',
      },
      underline: {
        '&:after': {
          borderBottom: `1px solid ${dustyGray}`,
        },
        '&$error:after': {
          borderBottomColor: persimmon,
          transform: 'scaleX(1)', // error is always underlined in red
        },
      },
    },
    MuiFormHelperText: {
      root: {
        marginTop: '-1em',
        marginBottom: 0,
      },
    },
  },
};

export default createMuiTheme(themeObj);

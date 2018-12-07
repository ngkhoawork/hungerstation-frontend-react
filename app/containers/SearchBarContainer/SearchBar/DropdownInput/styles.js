import { fontFamilyRegular, fontFamilyLight } from 'utils/css/variables';

export default () => ({
  icon: {
    margin: '0 8px',
  },
  input: {},
  inputRoot: {
    fontFamily: fontFamilyLight,
    flexWrap: 'wrap',
    margin: '0 8px',
  },
  focusedInput: {
    zIndex: 200,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  backgroundSuggestion: {
    position: 'absolute',
    color: '#999',
    fontFamily: fontFamilyLight,
    flexWrap: 'wrap',
    margin: 0,
    marginTop: '-1px',
    marginLeft: '51px',
    zIndex: 199,
  },
  paper: {
    position: 'absolute',
    zIndex: 101,
    left: 20,
    right: 0,
    top: 0,
    paddingTop: '48px',
    borderRadius: '8px',
    boxShadow: '8px 7px 23px 0 rgba(59, 59, 59, 0.1)',
    '@media (max-width: 850px)': {
      left: '0px',
      right: '0px',
    },
  },
  menuItem: {
    fontFamily: fontFamilyRegular,
    '&:last-of-type': {
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px',
    },
    '&:not(:last-of-type)': {
      borderBottom: '1px solid rgba(186, 186, 186, 0.20)',
    },
  },
  menuItemSelected: {
    backgroundColor: 'rgba(186, 186, 186, 0.20) !important',
  },
});

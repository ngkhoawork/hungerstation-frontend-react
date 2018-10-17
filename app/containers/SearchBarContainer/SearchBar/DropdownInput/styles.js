export default () => ({
  icon: {
    margin: '0 8px',
  },
  input: {
    padding: '3px 0 0 0',
  },
  inputRoot: {
    fontFamily: `'HungerStation-Light', sans-serif`,
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
  paper: {
    position: 'absolute',
    zIndex: 101,
    left: 0,
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
    fontFamily: `'HungerStation-Regular', sans-serif`,
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
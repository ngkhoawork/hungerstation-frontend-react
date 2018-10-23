import { withStyles } from '@material-ui/core/styles';
import { fuscousGray, lightGray } from 'utils/css/colors';
import { fontFamilyRegular } from 'utils/css/variables';
import MuiFormControlLabel from '@material-ui/core/FormControlLabel';

const FormControlLabel = withStyles({
  root: {
    borderBottom: `solid 1px ${lightGray}`,
    marginLeft: 0,
    marginRight: 0,
  },
  label: {
    color: `${fuscousGray}`,
    fontFamily: `${fontFamilyRegular}`,
    fontSize: 16,
    paddingTop: '3px',
  },
})(MuiFormControlLabel);

export default FormControlLabel;

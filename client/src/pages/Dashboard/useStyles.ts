import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { theme } from '../../themes/theme';

const useStyles = makeStyles((theme: Theme) => ({
  abRoot: {
    marginTop: 200,
  },
  abItem: {
    color: '#111',
  },
  abLogo: {
    marginRight: 150,
    marginLeft: 150,
  },
  abTop: {
    marginTop: 150,
  },
  abText: {
    color: '#888',
    width: 200,
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'center',
  },
}));

export default useStyles;

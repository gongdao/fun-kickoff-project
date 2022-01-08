import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  typography: {
    fontFamily: ' "Roboto", "Arial"',
    fontSize: '8',
    color: '#000000',
    marginBottoms: -5,
    paddingLeft: '15px',
  },
  inputs: {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    height: '2rem',
    padding: '5px',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    backgroundColor: '#f14140',
    fontWeight: 'bold',
  },
}));

export default useStyles;

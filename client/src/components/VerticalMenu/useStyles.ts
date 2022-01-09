import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  chatSideBanner: {
    height: '100vh',
    padding: '1rem 1rem',
    marginLeft: 100,
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      padding: '2rem 2rem',
      width: '300px',
    },
  },
  abItem: {
    color: '#777',
    marginLeft: 100,
    fontWeight: 400,
    fontSize: 14,
  },
  abSelected: {
    color: '#111',
    marginLeft: 100,
    fontWeight: 700,
    fontSize: 14,
  },
}));

export default useStyles;

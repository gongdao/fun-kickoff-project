import Grid from '@mui/material/Grid';
import useStyles from './useStyles';
import { User } from '../../interface/User';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

interface Props {
  loggedInUser: User;
  handleDrawerToggle?: () => void;
}

const VerticalMenu = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }
  return (
    <Grid container display="flex" flexDirection="column" className={classes.chatSideBanner}>
      <div>
        <Box sx={{ p: 1, bgcolor: 'background.paper' }} className={classes.abItem}>
          Edit profile
        </Box>
        <Box sx={{ p: 1, bgcolor: 'background.paper' }} className={classes.abSelected}>
          Profile Photo
        </Box>
        <Box sx={{ p: 1, bgcolor: 'background.paper' }} className={classes.abItem}>
          Availability
        </Box>
        <Box sx={{ p: 1, bgcolor: 'background.paper' }} className={classes.abItem}>
          Payment
        </Box>
        <Box sx={{ p: 1, bgcolor: 'background.paper' }} className={classes.abItem}>
          security
        </Box>
        <Box sx={{ p: 1, bgcolor: 'background.paper' }} className={classes.abItem}>
          Settings
        </Box>
      </div>
    </Grid>
  );
};

export default VerticalMenu;

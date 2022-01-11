import Grid from '@mui/material/Grid';
import useStyles from './useStyles';
import { User } from '../../interface/User';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Button } from '@mui/material';

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
      <Button style={{ color: '#000000', fontWeight: 700, width: 150 }} className={classes.button}>
        Profile Photo
      </Button>
      <Button style={{ color: '#777777', width: 150 }} className={classes.button}>
        Edit profile
      </Button>
      <Button style={{ color: '#777777', width: 150 }} className={classes.button}>
        Availability
      </Button>
      <Button style={{ color: '#777777', width: 150 }} className={classes.button}>
        Payment
      </Button>
      <Button style={{ color: '#777777', width: 150 }} className={classes.button}>
        security
      </Button>
      <Button style={{ color: '#777777', width: 150 }} className={classes.button}>
        Settings
      </Button>
    </Grid>
  );
};

export default VerticalMenu;

import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import { User } from '../../interface/User';

interface Props {
  loggedInUser: User;
  handleDrawerToggle?: () => void;
}
const Sidebar = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }
  return (
    <div className={classes.abSidebar}>
      <List>
        <ListItem className={classes.listItem}>
          <Link style={{ textDecoration: 'none', color: '#555' }} to="/dashboard">
            Profile
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link style={{ textDecoration: 'none', color: '#555' }} to="/dashboard">
            Edit profile
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link style={{ textDecoration: 'none', color: '#555' }} to="/availability">
            Availability
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link style={{ textDecoration: 'none', color: '#555' }} to="/payment">
            Payment
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link style={{ textDecoration: 'none', color: '#555' }} to="/login">
            Security
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link style={{ textDecoration: 'none', color: '#555' }} to="/login">
            Settings
          </Link>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;

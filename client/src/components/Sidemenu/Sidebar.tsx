import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import { User } from '../../interface/User';

interface Props {
  loggedInUser: User;
  active: string;
}
const Sidebar = ({ loggedInUser, active }: Props): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const menuItems = [
    { id: 1, name: 'Profile', to: 'dashboard' },
    { id: 2, name: 'Edit profile', to: 'editProfile' },
    { id: 3, name: 'Availability', to: 'availability' },
    { id: 4, name: 'Payment', to: 'payment' },
    { id: 5, name: 'Security', to: 'security' },
    { id: 6, name: 'Settings', to: 'settings' },
  ];

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  const createMenu = () => {
    const menu = [];
    for (let i = 0; i < menuItems.length; i++) {
      if (active === menuItems[i].name) {
        menu.push(
          <ListItem className={classes.abItem}>
            <Link style={{ textDecoration: 'none', color: '#555' }} to={`/${menuItems[i].to}`}>
              {menuItems[i].name}
            </Link>
          </ListItem>,
        );
      } else {
        menu.push(
          <ListItem className={classes.listItem}>
            <Link style={{ textDecoration: 'none', color: '#555' }} to={`/${menuItems[i].to}`}>
              {menuItems[i].name}
            </Link>
          </ListItem>,
        );
      }
    }
    return menu;
  };

  return (
    <div className={classes.abSidebar}>
      <List>{createMenu()}</List>
    </div>
  );
};

export default Sidebar;

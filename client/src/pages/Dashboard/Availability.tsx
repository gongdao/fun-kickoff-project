import React, { useEffect } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { Navbar } from '../../components/Navbar/Navbar';
import useStyles from './useStyles';
import Sidebar from '../../components/Sidemenu/Sidebar';
import Available from '../../assets/avatar/availability.png';

export default function Availability(): JSX.Element {
  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <div className={classes.abTop}>
          <Sidebar loggedInUser={loggedInUser} />
        </div>
        <div style={{ marginTop: 130, marginLeft: '-150px' }}>
          <img src={Available} alt="availability" />
        </div>
      </Box>
    </>
  );
}

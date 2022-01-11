import React, { useEffect } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Typography, Grid, Box, Avatar, Button } from '@mui/material';
import { Navbar } from '../../components/Navbar/Navbar';
import useStyles from './useStyles';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from '../../components/Sidemenu/Sidebar';

export default function Settings(): JSX.Element {
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
          <Sidebar loggedInUser={loggedInUser} active="Settings" />
        </div>
        <div style={{ marginTop: 160 }}>
          <Grid item display="flex" flexDirection="row">
            <Grid item display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h1">Profile Photo</Typography>
              <br></br>
              <Avatar
                alt="user photo"
                src={`https://robohash.org/${loggedInUser.email}.png`}
                sx={{ width: 86, height: 86 }}
              />
              <br></br>
              <br></br>
              <Typography className={classes.abText} variant="body1">
                Be sure to use photo that clearly show your face
              </Typography>
              <br></br>
              <br></br>
              <div style={{ marginTop: '330' }}>
                <Button
                  type="submit"
                  size="large"
                  style={{ color: '#ff0000', border: 'solid red 1px', width: '320', height: '56' }}
                >
                  {'Upload a file from your device'}
                </Button>
              </div>
              <Grid item display="flex" flexDirection="row" style={{ marginTop: 26 }}>
                <DeleteIcon />
                <Typography variant="body1">Delete photo</Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Availability from './pages/Dashboard/Availability';
import Payment from './pages/Dashboard/Payment';
import EditProfile from './pages/Dashboard/EditProfile';
import Security from './pages/Dashboard/Security';
import Settings from './pages/Dashboard/Settings';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';

import './App.css';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <CssBaseline />
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/editProfile" component={EditProfile} />
                <Route exact path="/availability" component={Availability} />
                <Route exact path="/payment" component={Payment} />
                <Route exact path="/security" component={Security} />
                <Route exact path="/settings" component={Settings} />
                <Route path="*">
                  <Redirect to="/login" />
                </Route>
              </Switch>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

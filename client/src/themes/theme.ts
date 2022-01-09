import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ' "Roboto", "Arial"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  palette: {
    primary: { main: '#3A8DFF' },
    warning: { main: '#f14140' },
  },
  shape: {
    borderRadius: 5,
  },
});

theme.typography.h3 = {
  fontSize: '0.8rem',
  marginTop: 10,
  marginBottom: -15,
};
theme.typography.h4 = {
  fontSize: '0.8rem',
};
theme.typography.h1 = {
  fontSize: '1.5rem',
};

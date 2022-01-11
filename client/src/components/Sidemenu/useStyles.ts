import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  abItem: {
    color: '#000',
    fontWeight: 'bolder',
    cursor: 'pointer',
  },
  abSidebar: {
    width: 150,
    marginLeft: 350,
  },
  listItem: {
    disableUnderline: true,
    fontWeight: 400,
    color: '#555',
    background: 'white',
    '&:hover': {
      color: '#000',
      fontWeight: 'bolder',
      cursor: 'pointer',
    },
    '&:active': {
      color: '#f00',
    },
    '&:focus': {
      color: '#f00',
      fontWeight: 'bolder',
    },
  },
  abStatic: {
    border: 'solid blue 2px',
  },
}));

export default useStyles;

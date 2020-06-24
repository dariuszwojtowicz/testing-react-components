import { createMuiTheme } from '@material-ui/core';

const primaryMainColor = '#ff5a00';
const secondaryMainColor = '#00A790';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryMainColor
    },
    secondary: {
      main: secondaryMainColor
    }
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: { fontSize: '3.1rem' },
    h2: { fontSize: '2.6rem' },
    h3: { fontSize: '2.1rem' },
    h4: { fontSize: '1.8rem' },
    h5: { fontSize: '1.5rem' },
    h6: { fontSize: '1.2rem' }
  },
  overrides: {
    MuiAppBar: {
      root: {
        backgroundColor: 'white'
      }
    },
    MuiExpansionPanel: {
      rounded: {
        '&:first-child': {
          borderRadius: '0 !important'
        },
        '&:last-child': {
          borderRadius: '0 !important'
        }
      }
    },
    MuiSnackbar: {
      anchorOriginBottomCenter: {
        bottom: '16px'
      }
    },
    MuiSnackbarContent: {
      root: {
        border: `1px solid ${secondaryMainColor}`,
        backgroundColor: 'white',
        color: 'black'
      }
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottom: `2px solid ${primaryMainColor}`
        }
      }
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: `${primaryMainColor} !important`
        }
      }
    }
  }
});

export default theme;

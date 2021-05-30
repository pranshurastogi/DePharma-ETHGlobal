import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Medicine from '../components/medicine-card.js';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Typography } from '@material-ui/core';
import NavBar from '../components/navBar';

// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // backgroundColor: 'white',
    backgroundColor: '#16161a',
    // height: "100vh",
    marginTop: theme.spacing(4),
    flex: 1,
    flexGrow: 1,
    width: "100%",
  },
  // necessary for content to be below app bar
//   toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
  },
}));

const IndexPage = (props) => {
  // const { window } = props;
  const classes = useStyles();
  const [alert, setAlert] = React.useState(null);
  // const theme = useTheme();
  const showAlert = (obj) => {
    setAlert(obj);
  }

  const closeAlert = () => {
    setAlert(null);
  }

  return (
    <div style={{width: '100vw', height: '100vh', flexGrow: 1, backgroundColor: '#16161a'}}>
    <NavBar />
    <div className={classes.root}>
      <main className={classes.content}>
        <div>
          { alert &&
            <Alert severity="success" onClose={closeAlert}>
                <AlertTitle>Success</AlertTitle>
                <Typography>Prescription under review, uploaded Successfully! Your file hash is <Typography display="inline" style={{fontWeight: 'bold'}} >{alert.hash}</Typography></Typography>
            </Alert>
          }
          <Grid
            container 
            spacing={0}
            alignItems = "center"
            justify = "center"
          >
            <Medicine showAlert={showAlert} />
          </Grid>
        </div>
      </main>
    </div>
    </div>
  );
}

// IndexPage.propTypes = {
//   window: PropTypes.func,
// };

export default IndexPage;
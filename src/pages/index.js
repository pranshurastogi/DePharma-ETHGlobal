import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Vaccine from '../components/vaccine-card.js';
import Equipments from '../components/equipments-card.js';
import Medicine from '../components/medicine-card.js';

// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // backgroundColor: 'white',
    backgroundColor: '#16161a',
    height: "100vh",
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
  // const theme = useTheme();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div>
          <Grid 
            container 
            spacing={0}
            alignItems = "center"
            justify = "center"
          >
            <Vaccine />
            <Medicine />
            <Equipments />
          </Grid>
        </div>
      </main>
    </div>
  );
}

IndexPage.propTypes = {
  window: PropTypes.func,
};

export default IndexPage;
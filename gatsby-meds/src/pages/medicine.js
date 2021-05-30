import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import BuyItems from '../components/buyItems';
import medicine from '../json/medicine.json';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/navBar';

// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // backgroundColor: 'white',
    backgroundColor: '#eedfcc',
    // height: "100vh",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
  },
}));

function Medicine(props) {
//   const { window } = props;
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <div style={{width: '100vw', height: '100vh', flexGrow: 1, backgroundColor: '#eedfcc'}}>
      <NavBar />
      <div className={classes.root}>
        <main className={classes.content}>
          <div>
            <Grid container spacing={4}>
                {medicine.map((data, index) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{paddingRight: 0, paddingLeft: 0, mardginRight: 0, marginLeft: 0}} >
                      <BuyItems dataFromParent={data} />
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        </main>
      </div>
    </div>
  );
}

// Medicine.propTypes = {
//   window: PropTypes.func,
// };

export default Medicine;
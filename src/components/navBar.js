import React from "react";
import {
    Box,
    makeStyles,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#7f5af0',
    },
}));

const NavBar = () => {

    const classes = useStyles();

    return(
        <Box className={classes.root}><Typography color="inherit" align="center" style={{fontSize: 22}} >DePharma : A decentralized Pharmacy</Typography></Box>
    );

}

export default NavBar;
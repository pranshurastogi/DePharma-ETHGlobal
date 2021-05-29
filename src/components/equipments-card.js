import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
// import { shadows } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '25vw',
    height: '35vw',
    // maxWidth: 280,
    // maxHeight: 300,
    backgroundColor: '#242629',
    raised: true,
    // backgroundColor: '#16161A',
    margin: 'auto',
    "&:hover": {
       backgroundColor: "#495057",
    },
  },
  title: {
    textAlign: 'center',
    color: '#fffffe',
    fontWeight:'600',
  },
  subheader: {
    textAlign: 'center',
    color: '#94a1b2',
    fontWeight:'300',
  },
  media: {
    paddingTop: '80%',
    // paddingTop: '56.25%', // 16:9
    objectFit: 'fit',
  },
  buyButton: {
    margin: 'auto',
    background: '#7f5af0',
  }
}));

export default function Equipments(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        classes={{
          title: classes.title,
          subheader: classes.subheader,
        }}
        title={"Equipments"}
        subheader={"Order your medical equipments"}
        color="#94a1b2"
      />
      <CardMedia
        className={classes.media}
        image={"https://images.pexels.com/photos/5125690/pexels-photo-5125690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
      />
      <CardActions disableSpacing>
        <Button variant="contained" color="primary" className={classes.buyButton}>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}
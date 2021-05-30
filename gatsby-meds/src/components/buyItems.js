import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '16vw',
    // height: '19vw',
    maxWidth: 280,
    maxHeight: 300,
    // backgroundColor: '#242629',
    backgroundColor: 'white',
    raised: true,
    // backgroundColor: '#16161A',
    margin: 'auto',
    "&:hover": {
       backgroundColor: "#495057",
    },
  },
  title: {
    // color: '#fffffe',
    // color: 'black',
    color: 'black',
    fontWeight:'600',
  },
  subheader: {
    // color: '#94a1b2',
    // color: 'black',
    color: 'black',
    fontWeight:'300',
  },
  media: {
    paddingTop: '56.25%', // 16:9
    objectFit: 'fit',
  },
  buyButton: {
    margin: 'auto',
    // background: '#7f5af0',
    background: 'black'
  }
}));

const buy = () => {
  console.log("Clicking buy!");
}

export default function BuyItems(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        classes={{
          title: classes.title,
          subheader: classes.subheader,
        }}
        title={props.dataFromParent["name"]}
        subheader={props.dataFromParent["price"]}
        color="#94a1b2"
      />
      <CardMedia
        className={classes.media}
        image={`https://ipfs.io/ipfs/${props.dataFromParent["uri"]}`}
      />
      <CardActions disableSpacing>
        <Button variant="contained" color="primary" className={classes.buyButton} onClick={buy}>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

const REACT_APP_PINATA_API_KEY = "ed59c1f5ed7ea5329b2b";
const REACT_APP_PINATA_API_SECRET_KEY = "b679125e83ce2d3885405965786430e4298e9d6cc34a8121cb8be90b932f22d5";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
    },
    "&:hover": {
        backgroundColor: "#495057",
     },
  },
  input: {
    display: 'none',
  },
  buyButton: {
    // margin: 'auto',
    background: '#7f5af0',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    textTransform: 'none',
    // columnGap: theme.spacing(2),
  },
  progress: {
    color: "inherit",
    marginLeft: theme.spacing(1),
  },
}));

export default function UploadButtons(props) {
  const classes = useStyles();

  const [loading, setLoading] = React.useState(false);

//   const [state, setState] = React.useState({
//     mainState: "initial", // initial, search, gallery, uploaded
//     imageUploaded: 0,
//     selectedFile: null
//   });

  const axios = require('axios');
  const FormData = require('form-data');
  var IPFS_HASH = '';

  // const showAlert = (hash) => {
  //     return(
  //       <Alert severity="success">
  //           <AlertTitle>Success</AlertTitle>
  //           Prescription uploaded Successfully! — <strong>`${hash}`</strong>
  //       </Alert>
  //     );
  // }

  const pinFileToIPFS = async (uri) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    let data = new FormData();
    data.append('file', uri);
    // const metadata = JSON.stringify({
    //   name: 'prescription',
    //   keyvalues: {
    //       details: 'This is a prescription file.'
    //   }
    // });
    // data.append('pinataMetadata', metadata);
    const pinataOptions = JSON.stringify({
      cidVersion: 0,
      customPinPolicy: {
        regions: [
          {
            id: 'FRA1',
            desiredReplicationCount: 1
          },
          {
            id: 'NYC1',
            desiredReplicationCount: 2
          }
        ]
      }
    });
    data.append('pinataOptions', pinataOptions);

    return axios
      .post(url, data, {
        maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
        headers: {
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            pinata_api_key: REACT_APP_PINATA_API_KEY,
            pinata_secret_api_key: REACT_APP_PINATA_API_SECRET_KEY
        }
      })
      .then(function (response) {
          //handle response here
          console.log("response: ", response.data.IpfsHash);
          IPFS_HASH = response.data.IpfsHash;
          props.showAlert({hash : IPFS_HASH});
      })
      .catch(function (error) {
          //handle error here
          console.log("error: ", error);
      });
  };

  const handleUploadClick = event => {
    setLoading(true);
    console.log();
    var file = event.target.files[0];
    pinFileToIPFS(file).then(()=> {
      setLoading(false);
      console.log("file: ", file);
    });
  };

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleUploadClick}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" disabled={false} className={classes.buyButton} component="span">
          <Typography>UPLOAD PRESCRIPTION</Typography>
          { loading && 
            <CircularProgress className={classes.progress} size={20} />
          }
        </Button>
      </label>
    </div>
  );
}
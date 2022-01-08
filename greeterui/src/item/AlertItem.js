import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
}));

export default function AlertItem(props) {
    const classes = useStyles();
    const messageContent = props.message;
    const status = props.status;
    const showAlert = () => {
      if(messageContent === '' || messageContent === 'undefined' || messageContent === undefined ) {
        console.log(messageContent);
        return (
          <></>
        )
      }else {
        console.log(messageContent);
        return (
          <Alert severity={status} color={status}>
            {messageContent}
          </Alert>
        )
      }
    }
    return (
        <div className={classes.root}>
          {showAlert()}
        </div>
    );
}
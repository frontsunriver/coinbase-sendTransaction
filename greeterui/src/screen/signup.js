import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AlertItem from '../item/AlertItem';
import { url } from '../Config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('error');
  const navigate = useNavigate();

  useEffect(() => {
    let userInfo = sessionStorage.getItem('userInfo');
    if(userInfo != null) {
        navigate('/dashboard');
    }
  }, []);

  useEffect(() => {
    showMessage();
  }, [message, status]);

  const changeValue = (e) => {
    if(e.target.name === 'email') {
      setEmail(e.target.value);
    }else if(e.target.name === 'password'){
      setPassword(e.target.value);
    }else if(e.target.name === 'firstName'){
        setFirstName(e.target.value);
    }else if(e.target.name === 'lastName'){
        setLastName(e.target.value);
    }
  }

  const showMessage = () => {
    return (
      <AlertItem message={message} status={status} />
    )
  }

  const signup = (e) => {
    e.preventDefault();
    if(firstName === '') {
        setMessage('Please insert the first name');
        setStatus('error')
        return;
    }
    if(lastName === '') {
        setMessage('Please insert the last name');
        setStatus('error')
        return;
    }
    if(email === ''){
      setMessage('Please insert the email');
      setStatus('error')
      return;
    }
    if(password === ''){
      setMessage('Please insert the password');
      setStatus('error')
      return;
    }
    axios.post(`${url}/signup`, {firstName: firstName, lastName: lastName, email: email, password: password})
    .then( (resp) => {
      console.log(resp)
      if(resp.data.success){
        setMessage(resp.data.message)
        setStatus('success');
      }else {
        setMessage(resp.data.message)
        setStatus('error');
      }
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {showMessage()}
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={changeValue}
                value={firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={changeValue}
                value={lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={changeValue}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={changeValue}
                value={password}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signup}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
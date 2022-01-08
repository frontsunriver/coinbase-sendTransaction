import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MainHeader from '../component/main_header';
import { createMuiTheme, FormControl, InputAdornment, InputLabel, OutlinedInput, Button } from '@material-ui/core';
import { useEthers, useEtherBalance, useToken, useTokenBalance } from "@usedapp/core";
import { formatEther, formatUnits } from "@ethersproject/units";
import {GAME_TOKEN} from '../Config';
import axios from 'axios';
import { url, API_KEY, coinbase_url } from '../Config';
import { useNavigate } from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
      type: "dark",
      text: {
        primary: '#e5e5e5',
      },
    }
});

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  boxstyle: {
      border: '1px solid #504d4d',
      padding: theme.spacing(2),
      marginTop: theme.spacing(3)
  },
  price: {
    marginTop: theme.spacing(4)
  },
  button: {
    marginTop: theme.spacing(4),
    float: 'right'
  }
}));

export default function BuyToken() {
  const classes = useStyles();
  const navigate = useNavigate();
  const maintoken = useToken(GAME_TOKEN)
  const {activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const mainTokenBalance = useTokenBalance(GAME_TOKEN, account);
  const [basePrice, setBasePrice] = useState(0);
  const [token, setToken] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [status, setStatus] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    var sessionData = sessionStorage.getItem('userInfo');
    setUserInfo(JSON.parse(sessionData));
    axios.post(`${url}/getBasePrice`)
    .then( (resp) => {
      console.log(resp)
      if(resp.data.success){
        setBasePrice(resp.data.data.base_price);
        setTotalPrice(resp.data.data.base_price * token);
      }
    })
  }, [])

  const handleChange = (e) => {
    console.log(e.target.value);
    if(e.target.value < 1) {
      setToken(1);
    }else if(e.target.value >= 5001) {
      setToken(5000)
    }else {
      setToken(e.target.value);
    }
  }

  useEffect(() => {
    setTotalPrice(basePrice * token);
  }, [token])

  useEffect(() => {
    if(account) {
      setStatus(false);
    }else {
      setStatus(true);
    }
  }, [account])

  const handleBuyToken = () => {
    setStatus(true)
    axios.post(`${coinbase_url}`, {
      name: "Buy Game Token",
      description: "You can buy game token in this here.",
      local_price: {
        "amount": totalPrice,
        "currency": "USD"
      },
      pricing_type: "fixed_price",
    }, {
      headers: {
        "X-CC-Api-Key": API_KEY,
        "X-CC-Version": '2018-03-22'
      }
    })
    .then( (resp) => {
      console.log(resp)
      axios.post(`${url}/deposit`, {
        amount: totalPrice,
        code: resp.data.data.code,
        address: account,
        token: token,
        user_id: userInfo.id
      }).then( (res) => {
        setStatus(false);
        if(res.data.success){
          navigate('/dashboard');
          window.open(resp.data.data.hosted_url);
        }
      })
    })
  }

  return (
    <ThemeProvider theme={theme} >
        <React.Fragment>
        <CssBaseline />
        <MainHeader />  
        {/* Hero unit */}
        <Container component="sm" className={classes.heroContent}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-token-amount">Count</InputLabel>
            <OutlinedInput
              id="outlined-token-amount"
              type="number"
              onChange={handleChange}
              InputProps={{ inputProps:{min: 1, max: 5000 } }}
              labelWidth={60}
              value={token}
            />
          </FormControl>
          <FormControl fullWidth className={classes.price} variant="outlined">
            <InputLabel htmlFor="outlined-price-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-price-amount"
              type="number"
              disabled={true}
              value={totalPrice}
              startAdornment={<InputAdornment position="start" style={{marginTop: 20}}>$</InputAdornment>}
              labelWidth={60}
            />
          </FormControl>
          <FormControl fullWidth className={classes.price} variant="outlined">
            <InputLabel htmlFor="outlined-address">Address</InputLabel>
            <OutlinedInput
              id="outlined-address"
              disabled={true}
              value={account ? account : ''}
              labelWidth={60}
            />
          </FormControl>
          <Button disabled={status} variant="contained" className={classes.button} color="primary" onClick={handleBuyToken}>
            Buy Token
          </Button>
        </Container>
        
        </React.Fragment>
    </ThemeProvider>
  );
}
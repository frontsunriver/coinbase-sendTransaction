import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MainHeader from '../component/main_header';
import { createMuiTheme } from '@material-ui/core';
import { useEthers, useEtherBalance, useToken, useTokenBalance } from "@usedapp/core";
import { formatEther, formatUnits } from "@ethersproject/units";
import {GAME_TOKEN} from '../Config';

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
  }

}));

export default function Dashboard() {
  const classes = useStyles();
  const maintoken = useToken(GAME_TOKEN)
  const {activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const mainTokenBalance = useTokenBalance(GAME_TOKEN, account);
  const walletToken = () => {
    return account ? (
        <Grid container spacing={1}> 
            <Grid container item xs={12} spacing={3} className={classes.boxstyle}>
                <Grid item xs={4} spacing={3}>
                    <Typography align="center" variant="h6" nowrap color="textPrimary" fontWeight="medium">
                        BTC
                    </Typography>
                </Grid>
                <Grid item xs={4} spacing={3}>
                    <Typography align="center" variant="h6" noWrap color="textPrimary" fontWeight="medium">
                        {account && account}
                    </Typography>
                </Grid>
                <Grid item xs={4} spacing={3}>
                    <Typography align="center" variant="h6" color="textPrimary" fontWeight="medium">
                        0.20000 BTC
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3} className={classes.boxstyle}>
                <Grid item xs={4} spacing={1}>
                    <Typography align="center" variant="h6" noWrap color="textPrimary" fontWeight="medium">
                        ETH
                    </Typography>
                </Grid>
                <Grid item xs={4} spacing={1}>
                    <Typography align="center" variant="h6" noWrap color="textPrimary" fontWeight="medium">
                        {account && account}
                    </Typography>
                </Grid>
                <Grid item xs={4} spacing={1} >
                    <Typography align="center" variant="h6" color="textPrimary" fontWeight="medium">
                        {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(5)} ETH
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3} className={classes.boxstyle}>
                <Grid item xs={4} spacing={1}>
                    <Typography align="center" variant="h6" noWrap color="textPrimary" fontWeight="medium">
                        GAME
                    </Typography>
                </Grid>
                <Grid item xs={4} spacing={1}>
                    <Typography align="center" variant="h6" noWrap color="textPrimary" fontWeight="medium">
                        {account && account}
                    </Typography>
                </Grid>
                <Grid item xs={4} spacing={1} >
                    <Typography align="center" variant="h6" color="textPrimary" fontWeight="medium">
                      {mainTokenBalance && formatUnits(mainTokenBalance, 18)} {maintoken?.symbol}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        
    ) : (
        <Typography align="center" variant="h6" wrap="nowrap" color="textPrimary" fontWeight="medium">
            Not Connected
        </Typography>
    )
  }
  return (
    <ThemeProvider theme={theme} >
        <React.Fragment>
        <CssBaseline />
        <MainHeader />  
        {/* Hero unit */}
        <Container component="main" className={classes.heroContent}>
            <Typography component="h3" variant="h2" align="center" color="textPrimary" gutterBottom>
            Tokens in your wallet address
            </Typography>
            {walletToken()}
        </Container>
        {/* Footer */}
        {/* End footer */}
        </React.Fragment>
    </ThemeProvider>
  );
}
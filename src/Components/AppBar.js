import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PublicIcon from '@material-ui/icons/Public';
import AppBar from "@material-ui/core/AppBar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © HackCville'}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  }
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Link
            variant="h6"
            color="inherit"
            href="/"
            className={classes.toolbarTitle}
          >
            VOTING MAP <PublicIcon></PublicIcon>
          </Link>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="/map"
              className={classes.link}
            >
              Find Poll Location
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/about"
              className={classes.link}
            >
              About
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/group"
              className={classes.link}
            >
              Group Members
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/hackcville"
              className={classes.link}
            >
              HackCville
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

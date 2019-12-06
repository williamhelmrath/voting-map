import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Box,
  Container,
  Link,
  Typography,
  Grid,
  CssBaseline
} from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © HackCville "}
      <Link color="inherit" href="https://material-ui.com/">
        Source A Fall 
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.blue
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(4)
    }
  }
}));

// const footers = [
//   {
//     title: 'HackCville',
//     description: ['Team', 'History', 'Contact us', 'Locations'],
//   },
//   {
//     title: 'Google API',
//     description: ['About', 'Usage', 'Team feature', 'Developer stuff'],
//   },
//   {
//     title: 'Project',
//     description: ['Team Feature', 'Developer Stuff', 'Environments Used'],
//   },
//   {
//     title: "Legal",
//     description: ["Privacy policy", "Terms of use"]
//   }
// ];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        {/* <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid> */}
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

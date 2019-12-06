import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ProfileGrid from "./ProfileGrid.js";

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  }
}));

const Group = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Group Members
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Want to learn more about us? Check out our bio cards below, also
          linked to our professional accounts!
        </Typography>
      </Container>

      <ProfileGrid />
    </div>
  );
};

export default Group;

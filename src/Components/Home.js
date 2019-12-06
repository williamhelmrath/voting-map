import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Parallax } from "react-parallax";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  textContent: {
    padding: theme.spacing(27, 0, 6)
  },

  parallaxContent: {
    padding: theme.spacing(0, 0, 6)
  },

  button: {
    margin: theme.spacing(1)
  },

  input: {
    display: "none"
  }
}));

const Home = () => {
  const classes = useStyles();
  const typographyStyle = {
    color: "black",
    backgroundColor: "white",
    opacity: 0.9
  };

  return (
    <div>
      {/* add parallax or some cool image stuffs :0 */}
      <Parallax
        bgImage={require("./Images/voting4.jpg")}
        bgImageAlt="voting"
        strength={200}
      >
        <Container
          maxWidth="sm"
          component="main"
          className={classes.textContent}
        >
          <div
            className={classes.parallaxContent}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Typography
              variant="h1"
              align="center"
              color="inherit"
              style={typographyStyle}
              gutterBottom
            >
              Welcome
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              component="p"
              style={typographyStyle}
            >
              Try the interactive map that allows you to check voting location
              information across the United States!
            </Typography>

            <Button variant="contained" className={classes.button} href="/map">
              Start Here
            </Button>
          </div>
        </Container>
      </Parallax>
    </div>
  );
};

export default Home;

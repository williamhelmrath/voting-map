import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
   heroContent: {
       padding: theme.spacing(8,0,6)
   } 
}));

const Home = () => {

    const classes = useStyles();

    return (
        <div>

            {/* add parallax or some cool image stuffs :0 */}

            <h1>"Home" page</h1>
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Welcome
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    Interactive map that allows you to check voting location information
                    across the US!
                </Typography>
            </Container>
        </div>
    );
};

export default Home;


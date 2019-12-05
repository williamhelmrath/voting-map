import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Parallax, Background } from 'react-parallax';

const useStyles = makeStyles(theme => ({
   textContent: {
       padding: theme.spacing(27,0,6),
   },

   parallaxContent: {
    padding: theme.spacing(0,0,6)
   }

}));

const Home = () => {

    const classes = useStyles();

    return (
        <div>

            {/* add parallax or some cool image stuffs :0 */}
            <div className={classes.parallaxContent}>
                <Parallax
                    // blur={10}
                    bgImage={require('./Images/voting4.jpg')}
                    bgImageAlt="voting"
                    strength={200}
                >
                    <Container maxWidth="sm" component="main" className={classes.textContent}>
                        <Typography
                            // component="h1"
                            variant="h1"
                            align="center"
                            color="inherit"
                            style={{ 
                                color: "black", 
                                backgroundColor: "white", 
                                opacity: 0.6
                            }}
                            gutterBottom
                        >
                            Welcome
                    </Typography>

                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            component="p"
                        style={{ 
                            color: "black", 
                            backgroundColor: "white", 
                            opacity: 0.6
                        }}
                        >
                        Try the interactive map that allows you to check voting location information
                            across the United States!
                    </Typography>

                    </Container>
                    
                    <div style={{ height: '300px' }} />
                </Parallax>
            </div>


        </div>
    );
};

export default Home;


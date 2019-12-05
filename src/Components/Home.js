import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Parallax, Background } from 'react-parallax';

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
            <Container component="main" className={classes.heroContent}>
                <Parallax
                    // blur={10}
                    bgImage={require('./Images/voting4.jpg')}
                    bgImageAlt="voting"
                    strength={200}
                >
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="inherit"
                        style={{ 
                            color: "black", 
                            align: "center",
                            // fontFamily: "Ariel"
                        }}
                        // gutterBottom
                    >
                        Welcome
                    </Typography>
                    <div style={{ height: '600px' }} />
                </Parallax>
            </Container>

            <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        component="p"
                        // style={{ 
                        //     position: "absolute", 
                        //     bottom: "100px", 
                        //     color: "black", 
                        //     backgroundColor: "gray", 
                        //     opacity: 0.6
                        // }}
                    >
                        Try the interactive map that allows you to check voting location information
                        across the United States!
                        {/* <div style={{ position: "absolute", bottom: "10px"}}/> */}
                    </Typography>


        </div>
    );
};

export default Home;


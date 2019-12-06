  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 340,
    width: 340,
  },
  control: {
    padding: theme.spacing(6),
  },
}));

export default function SpacingGrid() {
    const [spacing] = React.useState(2);

    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={3}>
                <Grid container justify="center" spacing={spacing}>
                    <Card className={classes.card}>
                        <CardActionArea className={classes.paper}>
                            <CardMedia
                                component="img"
                                height="220"
                                image={require('./Images/jaz.jpg')}
                            />
                            <CardContent>
                                <Typography 
                                    gutterBottom 
                                    variant="h5" 
                                    component="h2"
                                >
                                    Jazlene Guevarra
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary" 
                                    component="p"
                                >
                                    <b>Major: </b>Computer Engineering
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary" 
                                    component="p"
                                >
                                    <b>Year: </b> Fourth Year
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary" 
                                    component="p"
                                >
                                    <b>Role: </b> Front-End Development
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button 
                                size="small" 
                                color="primary" 
                                href="https://www.linkedin.com/in/jazlene-rae-guevarra-a47977121/"
                            >
                                LinkedIn
                            </Button>
                            <Button 
                                size="small" 
                                color="primary" 
                                href="https://github.com/jguevarra"
                            >
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <Grid item xs={3}>
                <Grid container justify="center" spacing={spacing}>
                    <Card className={classes.card}>
                        <CardActionArea className={classes.paper}>
                            <CardMedia
                                component="img"
                                height="220"
                                image={require('./Images/will.jpg')}
                            />
                            <CardContent>
                                <Typography 
                                    gutterBottom 
                                    variant="h5" 
                                    component="h2"
                                >
                                    William Helmrath
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary" 
                                    component="p"
                                >
                                    <b>Major: </b>Computer Science
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary" 
                                    component="p"
                                >
                                    <b>Year: </b> Second Year
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary" 
                                    component="p"
                                >
                                    <b>Role: </b> Back-End Development
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button 
                                size="small" 
                                color="primary" 
                                href="https://www.linkedin.com/in/williamhelmrath/"
                            >
                                LinkedIn
                            </Button>
                            <Button 
                                size="small" 
                                color="primary" 
                                href="https://github.com/williamhelmrath"
                            >
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <Grid item xs={3}>
                <Grid container justify="center" spacing={spacing}>
                    <Card className={classes.card}>
                        <CardActionArea className={classes.paper}>
                            <CardMedia
                                component="img"
                                height="220"
                                image={require('./Images/baby-yoda.jpg')}
                            />
                            <CardContent>
                                <Typography 
                                    gutterBottom 
                                    variant="h5" 
                                    component="h2"
                                >
                                    Avery Burton
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary" 
                                    component="p"
                                >
                                    <b>Major: </b> Economics | <b>Minor: </b> Mathematics
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary" 
                                    component="p"
                                >
                                    <b>Year: </b> Fourth Year
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary" 
                                    component="p"
                                >
                                    <b>Role: </b> Presentation and Ideas
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button 
                                size="small" 
                                color="primary" 
                                href="https://www.linkedin.com/in/avery-burton-6990b3119/"
                            >
                                LinkedIn
                            </Button>
                            <Button 
                                size="small" 
                                color="primary" 
                                href="https://github.com/aburton213"
                            >
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <Grid item xs={3}>
                <Grid container justify="center" spacing={spacing}>
                    <Card className={classes.card}>
                        <CardActionArea className={classes.paper}>
                            <CardMedia
                                component="img"
                                height="220"
                                image={require('./Images/renzo.jpg')}
                            />
                            <CardContent>
                                <Typography 
                                    gutterBottom 
                                    variant="h5" 
                                    component="h2"
                                >
                                    Renzo Guevarra
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary" 
                                    component="p"
                                >
                                    <b>Major: </b>Computer Science | <b>Minor: </b>Applied Math
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary" 
                                    component="p"
                                >
                                    <b>Year: </b> Second Year
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary" 
                                    component="p"
                                >
                                    Unable to come :-(
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button 
                                size="small" 
                                color="primary" 
                                href="https://www.linkedin.com/in/renzo-guevarra/"
                            >
                                LinkedIn
                            </Button>
                            <Button 
                                size="small" 
                                color="primary" 
                                href="https://github.com/renzoguevarra"
                            >
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

        </Grid>
    );
}
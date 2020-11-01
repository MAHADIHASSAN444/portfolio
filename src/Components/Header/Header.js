import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Avatar,Grid,Box} from "@material-ui/core"
import avatar from "../../mehedi.jpg";
import Typed from 'react-typed';
import Foter from '../Foter/Foter';

const useStyles = makeStyles(theme =>({
    avatar:{
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title:{
        color: "tomato",
    },
    subtitle:{
        color:"tan",
        marginBottom:"3rem",
    },
    typedContainer:{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100%vw",
        textAlign: "center",
        zIndex:1
    }

}))

const Header = () => {
    const classes= useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Mehedi Hassan" />
            </Grid>     
            <Typography className={classes.title}  variant="h4">
                <Typed strings={["Mehedi Hassan"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography className={classes.subtitle}  variant="h5">
                <Typed strings={["Web desiner", "Webdevelopement","MERN Stack"]} 
                typeSpeed={40} backSpeed={40} loop/>
            </Typography>
            <br/>
            <Foter/>
        </Box>
    );
};

export default Header;
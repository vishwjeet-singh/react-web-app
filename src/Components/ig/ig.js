import React from 'react';
import classes from './ig.module.css';
const ig = (props)=>{
    return (
        <img className={classes.imagesetting} src={props.person} alt= "so what are you gonna kill me"/>
    );
}
export default ig;
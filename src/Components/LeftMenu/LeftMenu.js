import React from 'react';
import cardimage from '../../Assets/images/download2.png';
import classes from './LeftMenu.module.css';
const leftMenu = (props)=>(
    <div className={classes.LeftMenu}>
        <div className={classes.linkportal}>
            <a className={classes.active} href="/" >Home</a>
            <a href="/">Files</a>
            <a href="/">Paper</a>
            <a href="/">Showcase</a>
        </div>
        <div style={{textAlign: "center"}}>
            <div className={classes.imagebox}>
                <img src = {cardimage} alt ="some text"/>
            </div>
            <div style={{color:"white"}}>Personal</div>
            <div style={{fontSize :"8px", color:"white"}}>Only you</div>
        </div>
        
    </div>
);

export default leftMenu;
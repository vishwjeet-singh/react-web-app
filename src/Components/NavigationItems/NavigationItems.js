import React from 'react';
import classes from './NavigationItems.module.css';
import {FaReact} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
const navigationItems = (props)=>(
    <div className={classes.NavigationItems}>
        <a href="/">
            <FaReact/>
        </a>
        <div className={classes.SearchBar}>
            <input className={classes.InputItem} type="text" placeholder="Search your content" name="Search">
            </input>
            <button className={classes.designbutton}>
            <BsSearch/>
            </button>
        </div>
    </div>
);
export default navigationItems;
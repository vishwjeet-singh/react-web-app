import React from 'react';
import {FaMusic} from 'react-icons/fa';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiFillFolder} from 'react-icons/ai';
import imgcontent from '../../Assets/images/scene.jpg';
import classes from './MiddlePage.module.css';
const middlePage = (props)=>(
    <div className={classes.pagewrapper}>
        <div>
            <h1 style={{paddingLeft :"24px"}}>Home</h1>

            <div className={classes.Upperbox}>
                <div className={classes.Imagebox}>
                    <img src={imgcontent} alt="Project will be realeased soon"/>
                    <span>
                        Last scene
                        <br/>
                        5 min ago
                    </span>
                </div>
                <div className={classes.Contentbox}>
                    <h2>Project</h2>
                    <p>We should be ready to reveal the new project next week and we are very excited.</p>
                    <span>
                        <form>
                            <input type="checkbox" ></input>
                            <label>Creating storyboard <i>@Bruce Patterson</i></label>
                        </form>
                    </span>
                    <span>
                        <form>
                            <input type="checkbox" defaultChecked></input>
                            <label><del>Preparing the source files</del> <i>@Charlie Huff</i></label>
                        </form>
                    </span>
                </div>
            </div>

        </div>
        <div className={classes.LowerBox}>
            <span>
                <h3 style={{paddingLeft:"15px"}}>Recent</h3>
                <p style={{backgroundColor :"#1d1ddd" ,
                 margin:"8px",
                 borderRadius:"5px",
                 fontSize:"14px",
                 padding:"5px",
                 color:"white",
                 fontWeight:"700",
                 boxShadow: "3px 3px #888888"
                 
                 }}><AiOutlinePlus/></p>
            </span>
            <br/>
            
            <span>
                <p><AiFillFolder/> Project Venus</p>
                <p>Folder</p>
            </span>
            <br/>
            <span className={classes.active}>
                <p><FaMusic/> Billie Eilish</p>
                <p>Music</p>
            </span>
            <br/>
            <span>
                <p><FaMusic/> City Skyline</p>
                <p>Picture</p>
            </span>
            <br/>
        </div>
    </div>
);

export default middlePage;
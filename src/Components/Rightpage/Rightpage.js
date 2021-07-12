import React from 'react';
import personimage1 from "../../Assets/images/person1.png";
import personimage2 from '../../Assets/images/person2.jpg';
import personimage3 from '../../Assets/images/person3.png';
import juice from '../../Assets/images/juiceimg.jpg';
import music from '../../Assets/images/music.jpg';
import {HiPlus} from 'react-icons/hi';
import {GrNotification} from "react-icons/gr";
import Ig from '../ig/ig';
import classes from './RightPage.module.css';
const rightpage = (props)=>(
    <div className={classes.pagewrapper}>
        <header style={{display:'flex',flexDirection:'row-reverse',marginRight:'15%'}}>
            <div style={{marginLeft:'22px'}}>
            <Ig person = {personimage1}/>
            </div>
            
            <GrNotification/>
            
        </header>
        <div>
            <div className={classes.imagesetting}>
                <img src={juice} alt="so;me"/>
            </div>
            <div style={{textAlign:'center'}}>
                <h3 style={{margin:'0px'}}>Billie Eilish</h3>
                <h5 style={{marginTop:'0px',fontSize:'10px',color:'grey'}}>1.5MB . Modified 3 hours ago</h5>
            </div>
            <div className={classes.musicimage} >
                <img  src={music} alt = "so; me"/>
            </div>
            <div>

            </div>
        </div>
        <hr/>
        <div style={{margin:'18px'}}>
            <Ig person={personimage1}/>
            <Ig person={personimage2}/>
            <Ig person={personimage3}/>
            <HiPlus/>
        </div>
        <div style={{display:'flex',flexDirection:'row' ,justifyContent:'center',alignItems:'center'}}>
            <Ig person = {personimage3}/>
            <p style={{marginLeft:'10px',fontFamily:'monospace'}}><b>@Marie</b> We need to make sure to review the cover  </p>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Ig person = {personimage2}/>
            <form style={{marginLeft:'12px',outline:'none',border:'none'}}>
                <input style={{border:'none',outline:'none'}} type="text" placeholder="Write a comment" name="Search"></input>
            </form>
        </div>
    </div>
    
);
export default rightpage;
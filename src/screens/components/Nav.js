import React, {useEffect, useState} from "react";
import "../css/Nav.css";
import { netflixLogo } from "../photos/netflixLogo";

const Nav = () => {
    const [show, setshow] = useState(false)

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            setshow(true)
        }else{
            setshow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',
        transitionNavBar)
        return ()=> window.removeEventListener('scroll', transitionNavBar)
    },[])

    return(
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__content">
        <img className="nav__logo" src={netflixLogo} alt="" />
        <img
          src="https://i.pinimg.com/originals/f6/97/4e/f6974e017d3f6196c4cbe284ee3eaf4e.png"
          alt=""
          className="nav__avatar"
        />
      </div>
    </div>
  );
};

export default Nav;

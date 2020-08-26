import React, { Component } from 'react'
import '../../styles/components/Footer/footer.scss';
import logo from "../../images/logo.png";

const Footer = ()=> (
  
    <div className="footer">
        <h1 className="motto" >Wubba Lubba Dub  Dub</h1>
        <div className="descContainer">
        <img src={logo} className="titleImage"/>
        <p className="desc">Rick and Morty is an American animated show that isn't Game of Thrones. It's a show where you watch a drunk Rick leading a socially insecure Morty into crazy interdimensional adventures and not to forget the absolute dumbfuck JERRY!</p>
        </div>
    </div>

);

export default Footer;
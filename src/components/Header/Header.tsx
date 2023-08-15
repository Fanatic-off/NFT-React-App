import React from "react";
import './Header.scss'
import '../../index.scss'
import logo from '../../assets/logo.png'
import user from '../../assets/User.svg'
import burgerMenu from '../../assets/burgerMenu.svg'


export const Header = () =>{
    return(
        <div>
        <header>
            <img src={logo} ></img>
            <div className="layout-item">
                <a href="#">Marketplace</a>
                <a href="#">Rankings</a>
                <a href="#">Connect a wallet</a>
                <button>
                    <img src={user}></img>
                    Sign Up
                </button>
            </div>
            <button className="fill mobile-only">
                <img src={burgerMenu}></img>
            </button>
        </header>
        </div>
    );
};
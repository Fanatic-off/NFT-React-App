import React from "react";
import '../../index.scss'
import './Footer.scss'
import logo from '../../assets/logo.png'
import discord from '../../assets/community/DiscordLogo.svg'
import youtube from '../../assets/community/YoutubeLogo.svg'
import twitter from '../../assets/community/TwitterLogo.svg'
import instagram from '../../assets/community/InstagramLogo.svg'

export const Footer = () => {
    return (
        <div className="main-block footer">
            <footer>
                <div className="info">
                    <div className="marketplace">
                        <img src={logo}></img>
                        <div className="info">
                            <div>NFT marketplace UI created with Anima for Figma.</div>
                            <div className="community">
                                <span>Join our community</span>
                                <div className="icons">
                                    <img src={discord}></img>
                                    <img src={youtube}></img>
                                    <img src={twitter}></img>
                                    <img src={instagram}></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="explore">
                        <div className="main-info">Explore</div>
                        <div className="info">
                            <span>Marketplace</span>
                            <span>Rankings</span>
                            <span>Connect a wallet</span>
                        </div>
                    </div>

                    <div className="digest">
                        <div className="main-info">Join our weekly digest</div>
                        <div className="info">
                            <span>Get exclusive promotions & updates straight to your inbox.</span>
                            <div className="email-form">
                                <span>Enter your email here</span>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-info">
                    <div className="divider"></div>
                    <span>Ⓒ NFT Market. Use this template freely.</span>
                </div>
            </footer>
        </div>
    );
};
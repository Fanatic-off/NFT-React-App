import React from "react";
import './HeroSection.scss'
import rocket from '../../../../assets/RocketLaunch.svg'
import cosmonauts from '../../../../assets/cosmonauts.png'
import animakid from '../../../../assets/animakid.png'


export const HeroSection = () =>{
    return(
        <div className="main-block">
            <div className="column flex-grow flex-start">
            <h1>Discover digital art & Collect NFTs</h1>
            <span>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</span>
            <button>
                <img src={rocket}></img>
                Get Started 
            </button>
            <div className="statistics">
                <div>
                    <h2>240k+</h2>
                    <div>Total Sale</div>
                </div>
                <div>
                    <h2>100k+</h2>
                    <div>Auctions</div>
                </div>
                <div>
                    <h2>240k+</h2>
                    <div>Artists</div>
                </div>
            </div>
        </div>
        <div className="grid">
            <img src={cosmonauts}></img>
            <div className="placeholder-footer">
                <div className="column flex-start">
                    <div>Space Walking</div>
                    <div className="footer-row">
                        <img className="player" src={animakid}></img>
                        <div>Animakid</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
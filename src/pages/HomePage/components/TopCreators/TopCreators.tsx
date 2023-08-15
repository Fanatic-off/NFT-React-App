import React from "react";
import './TopCreators.scss'
import '../../../../index.scss'
import rocket from '../../../../assets/RocketLaunch.svg'
import animakid from '../../../../assets/creators/Animakid.png'
import blueWhale from '../../../../assets/creators/BlueWhale.png'
import digiLab from '../../../../assets/creators/DigiLab.png'
import dotgu from '../../../../assets/creators/Dotgu.png'
import ghiblier from '../../../../assets/creators/Ghiblier.png'
import gravityOne from '../../../../assets/creators/GravityOne.png'
import juanie from '../../../../assets/creators/Juanie.png'
import keepitreal from '../../../../assets/creators/Keepitreal.png'
import mrFox from '../../../../assets/creators/Mr Fox.png'
import robotica from '../../../../assets/creators/Robotica.png'
import shroomie from '../../../../assets/creators/Shroomie.png'
import rustyRobot from '../../../../assets/creators/RustyRobot.png'

const creators: Creator[] = [
    {
        imgSrc: keepitreal,
        name: "keepitreal",
        sales: "34.53 ETH",
    },
    {
        imgSrc: digiLab,
        name: "digiLab",
        sales: "34.53 ETH",
    },
    {
        imgSrc: gravityOne,
        name: "gravityOne",
        sales: "34.53 ETH",
    },
    {
        imgSrc: juanie,
        name: "juanie",
        sales: "34.53 ETH",
    },
    {
        imgSrc: animakid,
        name: "animakid",
        sales: "34.53 ETH",
    },
    {
        imgSrc: blueWhale,
        name: "blueWhale",
        sales: "34.53 ETH",
    },
    {
        imgSrc: dotgu,
        name: "dotgu",
        sales: "34.53 ETH",
    },
    {
        imgSrc: ghiblier,
        name: "ghiblier",
        sales: "34.53 ETH",
    },
    {
        imgSrc: mrFox,
        name: "mrFox",
        sales: "34.53 ETH",
    },
    {
        imgSrc: robotica,
        name: "robotica",
        sales: "34.53 ETH",
    },
    {
        imgSrc: shroomie,
        name: "shroomie",
        sales: "34.53 ETH",
    },
    {
        imgSrc: rustyRobot,
        name: "rustyRobot",
        sales: "34.53 ETH",
    },
]

interface Creator {
    imgSrc: string,
    name: string,
    sales: string,
}

export const TopCreators = () => {
    return (
        <div className="main-block">
            <div className="container">
                <div className="headline">
                    <div className="column">
                        <h2>Top creators</h2>
                        <div>Checkout Top Rated Creators on the NFT Marketplace</div>
                    </div>
                    <button>
                        <img src={rocket}></img>
                        View Rankings
                    </button>
                </div>

                <div className="creator-list">
                    {
                        creators.map((item) => (
                            <div className="creator">
                                <div className="avatar">
                                    <img src={item.imgSrc}></img>
                                </div>
                                <div className="description">
                                    <div className="name">{item.name}</div>
                                    <div className="sales">
                                        <div className="total">Total Sales:</div>
                                        <div>{item.sales}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
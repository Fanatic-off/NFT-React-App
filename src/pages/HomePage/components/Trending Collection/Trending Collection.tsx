import React from "react";
import './Trending Collection.scss'
import '../../../../index.scss'
import dog from '../../../../assets/Dog.png'
import cat from '../../../../assets/Cat.png'
import bear from '../../../../assets/Bear.png'
import mrFox from '../../../../assets/Avatar Mr Fox.png'

const collections : Collection[] =[
    {
        mainImgSrc: dog,
        firstFooterImgSrc: cat,
        secondFooterImgSrc: bear,
        footerSign : "DSGN Animals",
        amount: "1025+",
        playerSrc: mrFox,
        playerName: "MrFox",
    },
    {
        mainImgSrc: dog,
        firstFooterImgSrc: cat,
        secondFooterImgSrc: bear,
        footerSign : "DSGN Animals",
        amount: "1025+",
        playerSrc: mrFox,
        playerName: "MrFox",
    },
    {
        mainImgSrc: dog,
        firstFooterImgSrc: cat,
        secondFooterImgSrc: bear,
        footerSign : "DSGN Animals",
        amount: "1025+",
        playerSrc: mrFox,
        playerName: "MrFox",
    },
]

interface Collection {
    mainImgSrc: string;
    firstFooterImgSrc: string;
    secondFooterImgSrc: string;
    amount: string;
    footerSign: string;
    playerSrc: string;
    playerName: string;
  }

export const TrendingCollection = () =>{
    return(
        <div className="main-block">
            <div className="container">
                <div className="headline">
                    <div className="column">
                        <h2>Trending Collection</h2>
                        <div>Checkout our weekly updated trending collection.</div>
                    </div>
                </div>

                <div className="collection-list">
                    {
                        collections.map((item)=>(
                            <div className="column">
                                <img src={item.mainImgSrc}></img>
                                <div className="collection">
                                        <img src={item.firstFooterImgSrc}></img>
                                        <img src={item.secondFooterImgSrc}></img>
                                        <button>{item.amount}</button>
                                </div>
                                <div className="column">
                                    <div>{item.footerSign}</div>
                                    <div className="footer-row">
                                        <img className="player" src={item.playerSrc}></img>
                                        <div>{item.playerName}</div>
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
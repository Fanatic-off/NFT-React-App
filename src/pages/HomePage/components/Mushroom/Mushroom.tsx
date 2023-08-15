import React from "react";
import './Mushroom.scss'
import '../../../../index.scss'
import mushroom from '../../../../assets/mushroom/Mushroom.png'

export const Mushroom = () => {
    return (
        <div className="main-block mushroom">
            <img className="width-100" src={mushroom} alt="NFT Highlight"></img>
        </div>
    )
}
import React from "react";
import './Browse Categories.scss'
import '../../../../index.scss'
import art from '../../../../assets/categories/Art.png'
import collectibles from '../../../../assets/categories/Collectibles.png'
import music from '../../../../assets/categories/Music.png'
import photography from '../../../../assets/categories/Photography.png'
import video from '../../../../assets/categories/Video.png'
import utility from '../../../../assets/categories/Utility.png'
import sport from '../../../../assets/categories/Sport.png'
import virtualWorlds from '../../../../assets/categories/Virtual Worlds.png'
import paintBrush from '../../../../assets/categories/secondary/PaintBrush.svg'
import swatches from '../../../../assets/categories/secondary/Swatches.svg'
import musicNotes from '../../../../assets/categories/secondary/MusicNotes.svg'
import camera from '../../../../assets/categories/secondary/Camera.svg'
import videoCamera from '../../../../assets/categories/secondary/VideoCamera.svg'
import magicWand from '../../../../assets/categories/secondary/MagicWand.svg'
import basketball from '../../../../assets/categories/secondary/Basketball.svg'
import planet from '../../../../assets/categories/secondary/Planet.svg'

const categories: Categores[] = [
    {
        src: art,
        secondarySrc: paintBrush,
        name: "art",
    },
    {
        src: collectibles,
        secondarySrc: swatches,
        name: "collectibles",
    },
    {
        src: music,
        secondarySrc: musicNotes,
        name: "music",
    },
    {
        src: photography,
        secondarySrc: camera,
        name: "photography",
    },
    {
        src: video,
        secondarySrc: videoCamera,
        name: "video",
    },
    {
        src: utility,
        secondarySrc: magicWand,
        name: "utility",
    },
    {
        src: sport,
        secondarySrc: basketball,
        name: "sport",
    },
    {
        src: virtualWorlds,
        secondarySrc: planet,
        name: "virtual Worlds",
    },

]

interface Categores {
    src: string,
    secondarySrc: string,
    name: string
}

export const BrowseCategories = () => {
    return (
        <div className="main-block">
            <div className="container">
                <div className="headline">
                    <h2>Browse Categories</h2>
                </div>

                <div className="category-list">
                    {
                        categories.map((item) => (
                            <div className="category">
                                <div className="category-image">
                                    <img src={item.src}></img>
                                    <div className="wrapper">
                                        <img className="secondary-picture" src={item.secondarySrc}></img>
                                    </div>
                                </div>
                                <div className="category-button">{item.name}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
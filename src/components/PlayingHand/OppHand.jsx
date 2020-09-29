import React from 'react';

import defaultOpp from "../../assets/img/opp.png";

import oppRockIMG from "../../assets/img/rock_opp.png";
import oppPaperIMG from "../../assets/img/paper_opp.png";
import oppScissorsIMG from "../../assets/img/scissors_opp.png";

import styles from "./PlayingHand.module.css"


const OppHand = ({ oppPick }) => {
    const oppImg = () => {
        if(oppPick === "Rock") {
            return (
                oppRockIMG
            )
        } else if(oppPick === "Paper") {return oppPaperIMG}
        else if(oppPick === "Scissors") {return oppScissorsIMG}
        return defaultOpp;
    }

    return (
        <div className = { styles.playinghand } >
            <img src={oppImg()} alt="opp"></img>
        </div>
    )
};

export default OppHand;

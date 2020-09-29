import React from 'react';
import {playingHandData} from "./playingHandData";


import styles from "./PlayingHand.module.css"

const PlayingHand = ({ onClick }) => {
    return (
        <div className = {styles.playinghand}>
                {playingHandData.map((item, index) => {
                    return (
                    <button key={index} className={styles.btn} onClick={(e) => {
                            onClick(item.value);
                        }}>
                        <img src={item.playerImgSrc} alt={item.text}></img>
                    </button>
                    );
                })}
        </div>
    )
}

export default PlayingHand;

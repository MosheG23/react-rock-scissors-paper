import React from 'react';
import styles from "./Scoreboard.module.css";
import cn from "classnames";

const Scoreboard = ({ user, opp, toWin }) => {
    return (
        <div className ={ styles.scoreboard }>
            <div className={styles.score}>
                <div div className = { cn(styles.badge, styles.user) } >
                    <h4>User</h4>
                </div>
                <div className={ cn(styles.badge, styles.opp) }>
                    <h4>Opp</h4>
                </div>
                <span className={styles.currResult}>{user} : {opp}</span>
                <span>To Win: {toWin} </span>
            </div>
        </div>
    )
}

export default Scoreboard;
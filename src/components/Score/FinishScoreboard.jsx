import React from 'react';
import { Link, Switch, Route } from "react-router-dom";

import styles from "./FinishScoreboard.module.css";

function FinishScoreboard({ user, data, reset, resetCustom }) {
    return (
        <>  
            <div className ={ styles.scoreboard }>
                <div className={styles.score}>
                    < span >
                        {(user === "user" ? "You WON" : "You LOST")}
                    </span>
                </div>
            </div>
            <h3>Game Log:</h3>
            <table className={styles.gameLogTable}>
                <thead>
                <tr>
                    <th>Round</th>
                    <th>User Hand</th>
                    <th>Opponent</th>
                    <th>Winner</th>
                    <th>Score</th>
                </tr>
                </thead>
            <tbody>
                    {data.map((item, index) => {
                        return(
                        <tr key={ index } >
                            <td>{index + 1}</td>
                            <td>{item.userHand}</td>
                            <td>{item.oppHand}</td>
                            <td>{item.message}</td>
                            <td>{item.userScore} : {item.oppScore}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            <h1>Another Game?</h1>
            <div className={styles.buttons}>
                <Link to="/game" ><button onClick={reset} className={styles.btn}>Arcade Mode</button></Link>
                <Switch>
                    <Route path="/custom">
                        <button onClick={resetCustom} className={styles.btn}>New Customize Game</button>
                    </Route>
                    <Route path="/game"><Link to="/custom" >
                        <button onClick={reset} className={styles.btn}>Customize Game</button></Link>
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default FinishScoreboard;
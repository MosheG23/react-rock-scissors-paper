import React, { useState } from 'react';
import { Link } from "react-router-dom";

import CurrentTurn from './CurrentTurn/CurrentTurn';
import Scoreboard from './Score/Scoreboard';
import FinishScoreboard from "./Score/FinishScoreboard";

import { gameplay, opponentRandomChoice, typeOfHands } from "../utils/gameEnginee";

import styles from "./Gameboard.module.css";
import PlayingHand from './PlayingHand/PlayingHand';
import OppTurn from './PlayingHand/OppHand';

let gameLog = [];

function Gameboard({ numberOfRounds ,uScore, opponentScore, resetCustom }){
    const [userScore, setUserScore] = useState(uScore || 0);
    const [oppScore, setOppScore] = useState(opponentScore || 0);
    const [oppHand, setOppHand] = useState("");
    const [currTurnMsg, setCurrTurnMsg] = useState("First Play");
    const [round, setRound] = useState(0);
    const [gameStatus, setGameStatus] = useState("Running");

    const rounds = numberOfRounds || 5;

    const toWin = parseInt(Math.floor(rounds / 2) + 1);

    const resetGame = () => {
        setUserScore(uScore || 0);
        setOppScore(opponentScore || 0);
        setOppHand("");
        setCurrTurnMsg("First Play");
        setGameStatus("Running")
        setRound(0);
        gameLog = [];
    }

    // handle click not useEffect!
    const handleClick = async (userPick) => {
        if(typeOfHands.includes(userPick)) {
            const oppPick = await opponentRandomChoice();
            setOppHand(oppPick);
            const playResult = await gameplay(userPick, oppPick, [userScore, oppScore], round, rounds, toWin);
            gameLog.push(playResult);
            setCurrTurnMsg(playResult.message);
            setRound(playResult.round);
            setUserScore(playResult.userScore);
            setOppScore(playResult.oppScore);
            setGameStatus(playResult.gameStatus);
        }
    };

    return (
        <>
            <div className={styles.exitBtn}><Link to="/" ><button onClick={resetGame} className={styles.btn}>Main</button></Link></div>
            <div className={styles.resetBtn}><button className={styles.btn} onClick={resetGame}>Reset</button></div>
            <div className={styles.gameboard}>
                <div className={styles.title} >Rock<span role="img" aria-label="sheep">✊🏽</span>
                Paper<span role="img" aria-label="sheep">✋🏾</span>
                Scissors<span role="img" aria-label="sheep">✌🏻</span></div>
                
                    {(gameStatus === "Running" 
                    ? 
                    <>
                        <OppTurn oppPick={oppHand} />
                        <Scoreboard user={ userScore } opp={ oppScore } toWin={toWin} /> 
                        <CurrentTurn message={currTurnMsg} />
                        <PlayingHand onClick={handleClick} />
                    </>
                    :
                       (userScore > oppScore ? 
                       <FinishScoreboard data={gameLog} user={"user"} reset={resetGame} resetCustom={resetCustom} /> 
                       : <FinishScoreboard data={gameLog} user={"opp"} reset={resetGame} resetCustom={resetCustom} />)  )}
                
            </div>
        </>
    )
}

export default Gameboard;

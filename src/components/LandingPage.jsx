import React from 'react';
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

import appLogo from "../assets/img/Rock-paper-scissors_logo.png";

const LandingPage = () => {
    return (
        <div className={styles.App__header}>
            <h2>Hi! Welcome to rock paper scissors!</h2>
            <img src={appLogo} alt="app"></img>
            <div className={styles.buttons}>
                <Link to="/game" ><button className={styles.btn}>Arcade Mode</button></Link>

                <Link to="/custom" ><button className={styles.btn}>Customize Game</button></Link>
            </div>
        </div>
    )
}

export default LandingPage;

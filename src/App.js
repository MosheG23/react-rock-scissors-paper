import React from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";

import styles from './App.module.css';
import { Gameboard } from "./components/"
import LandingPage from './components/LandingPage';
import CustomizePage from "./components/CustomizeGame/CustomizeGame";

const App = () => {
    return (
      <Router>
        <div className={styles.App}>
          <div className={styles.game}>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/game" component={Gameboard} />
            <Route exact path="/custom" component={CustomizePage} />
          </div>
          <div className={styles.title}>
            Created by Moshe Gotam &copy;
          </div>
        </div>
      </Router>
    );
}

export default App;

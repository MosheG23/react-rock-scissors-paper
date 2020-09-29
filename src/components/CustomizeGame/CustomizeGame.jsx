import React, { useState } from 'react';

import Gameboard from "../Gameboard";

import {TextField, Select, InputLabel, makeStyles, MenuItem, 
    FormControl, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "column"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


const CustomizeGame = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [oddNumber, setOddNumber] = useState(false);
    const [numberOfRounds, setNumberOfRounds] = useState(0);
    const [userScore, setUserScore] = useState(-1);
    const [oppScore, setOppScore] = useState(-1);
    const [gameBoard, setGameboard] = useState(false);

    const checkOddNumber = (value) => {
    if (value % 2 !== 0 && value < 101) {
      setOddNumber(true);
    } else {
      setOddNumber(false);
    }
    setNumberOfRounds(value);
  }
    const getScore = (value) => {
        let content = [];
        for (let i = 0; i < value / 2; i++) {
          content.push(<MenuItem value={i}>{i}</MenuItem>);
        }
        return content;
    };

    const buildGame = () => {
        setOpen(false);
        setGameboard(true);
    };

    const handleClose = () => {
        setOpen(false);
        setOddNumber(false);
    };

    const resetCustom = () => {
      setGameboard(false);
      setOpen(true);
      setOppScore(-1);
      setUserScore(-1);
      setOddNumber(false);
    }
    return (
      <>
        {gameBoard ? <Gameboard 
            numberOfRounds={numberOfRounds} uScore={userScore} 
            opponentScore={oppScore} resetCustom={resetCustom} /> : <></>} 
          <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
              <DialogTitle>Rock.Scissors.Paper</DialogTitle>
              <DialogContent>
                  <form className={classes.container}>
                      <TextField autoComplete="off" id="numberOfRounds" label="Number Of Rounds" onChange={(e) => 
                          checkOddNumber(e.target.value)} color="primary" /> <br/ >
                      <small>*Must Be an Odd Number and Below 101</small><br/ >
                      {oddNumber ? 
                      <>
                          <h4>Select game score</h4>
                          <FormControl className={classes.formControl}>
                              <InputLabel id="user-score-label">User Score</InputLabel>
                              <Select labelId = "user-score-label"
                              id = "user-score" onChange = { (e) =>
                                setUserScore(e.target.value)
                              } >
                                  {getScore(numberOfRounds)}
                              </Select>    
                          </FormControl>
                          <FormControl className={classes.formControl}>
                              <InputLabel id="user-score-label">Opponent Score</InputLabel>
                              <Select labelId = "opp-score-label" id = "opp-score"
                              onChange = { (e) =>
                                setOppScore(e.target.value) } >
                                  {getScore(numberOfRounds)}
                              </Select>
                          </FormControl>
                      </>
                      : <> </>}
                  </form>
              </DialogContent>
              <DialogActions>
              <Link to="/"><Button onClick={handleClose} color="primary">
                  Return
              </Button></Link>
              {oddNumber && userScore >= 0 && oppScore >= 0 ? <Button onClick={buildGame} color="primary">
                  Ok
              </Button> : <> </>}
              
              </DialogActions>
          </Dialog>
      </>
    )
}

export default CustomizeGame

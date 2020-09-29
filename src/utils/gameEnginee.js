export const typeOfHands = ["Rock", "Scissors", "Paper"]

// Get random from 0 to max number
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}


export const opponentRandomChoice = () => {
    return typeOfHands[getRandomInt(3)];
}

const checkWinner = (user, opponent) => {
        console.log(user.charAt(0) + opponent.charAt(0));
    switch (user.charAt(0) + opponent.charAt(0)) {
        case "RS":
        case "SP":
        case "PR":
            return 1;
        case "RP":
        case "SR":
        case "PS":
            return -1;
    }
    return 0;
}

const updateResult = (score, result) => {
    if (result === 1) {
        return [score[0] + 1, score[1]];
    } else if (result === -1) {
        return [score[0], score[1] + 1];
    }
    return [score[0], score[1]];
}

const playTurn = (user, opp, score) => {
    const result = checkWinner(user, opp);
    return [
        (result === 1) ? "User WON!" : 
            (result === -1) ? "Opponent WON" : "DRAW!",
        updateResult(score, result)
    ]
}

// If game ends return 1
const checkIfGameEnd = (currRound, rounds, toWin, currScore) => {
    console.log(currRound, currScore[0], currScore[1], +rounds, toWin);
    if ((currScore[0] === toWin) || (currScore[1] === toWin)) {
        return 1;
    }
    return 0;
}

export const gameplay = async (userHand, oppHand, currResult, round, rounds, toWin) => {
    const result = await playTurn(userHand, oppHand, currResult);
    const gameStatus = await (checkIfGameEnd((result[0] !== "DRAW!" ? round + 1 : round), rounds, toWin, result[1]));
    // Check if game finished
    return {
        message: result[0],
        userScore: result[1][0],
        userHand: userHand,
        oppScore: result[1][1],
        oppHand: oppHand,
        gameStatus: (gameStatus === 1 ? "Finished" : "Running"),
        round: (result[0] !== "DRAW!" ? round + 1 : round)
    }
}

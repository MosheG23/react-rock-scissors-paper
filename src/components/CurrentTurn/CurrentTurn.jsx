import React from 'react'

const CurrentTurn = ({ message }) => {
    if(message === "") {
        return (
            <h5>First Play</h5>
        )
    }
    return (
        <h5>{message}</h5>
    )
}
export default CurrentTurn;

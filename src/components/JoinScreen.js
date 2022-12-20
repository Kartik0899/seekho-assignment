import React from 'react'

function JoinScreen({ start }) {
    return (
        <div className="join-screen">
            <h2>Join Quiz</h2>
            <p>Click on start to Join the Quiz.</p>
            <button onClick={start}>Start</button>
        </div>
    )
}

export default JoinScreen
import React from 'react'

const CodeConsole = ({ Text }) => {
    return (
        <p className="ml-7">
            <span className="text-cyan-400">console.log</span>{'('}<span className="text-green-400">"{Text}"</span>{')'};
        </p>
    )
}

export default CodeConsole
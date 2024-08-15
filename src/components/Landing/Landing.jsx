import React from 'react'

export default function Landing({onClick}) {
  return (
    <div className="landing">
        <h1 className="hover-text">Bikes. Codes. <br />
            Design. Coffee. <br />
            Photography. <br />
            Keyboard.
        </h1>

        <button onClick={onClick}>
            <span>View Profile</span>
        </button>

    </div>
  )
}

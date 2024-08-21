import React from 'react'

export default function Landing({onClick}) {
  return (
    <div className="landing">
        <p className="hover-text font-sans text-white text-[48px] md:text-[84px]">Bikes. Codes. <br />
            Design. Coffee. <br />
            Photography. <br />
            Keyboard.
        </p>

        <button onClick={onClick}>
            <span>View Profile</span>
        </button>

    </div>
  )
}

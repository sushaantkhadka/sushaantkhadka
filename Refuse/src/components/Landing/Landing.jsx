import React from 'react'

export default function Landing({ onClick }) {

  const word = "Bikes. Codes._ Design. Coffee._ Photography._ Keyboard.";

  return (
    <div className="landing">
      {/* <p className="hover-text font-sans text-white text-[48px] md:text-[84px]">Bikes. Codes.<br />
            Design. Coffee. <br />
            Photography. <br />
            Keyboard.
        </p> */}

      {word.split("_").map((item, index) => {
        return <p key={index} className="hover-text font-sans text-[32px] text-white sm:text-[48px] md:text-[64px] lg:text-[84px] cursor-pointer">
          {item.split("").map((letter, i) => {
            return <span key={i} className='hover:text-amber-400 md:hover:text-[84px] sm:hover:text-[64px] lg:hover:text-[124px] leading-[32px] sm:leading-[48px] md:leading-[64px] lg:leading-[84px]  animate-bounce duration-300' >{letter}</span>
          })}
        </p>
      })}

      <button onClick={onClick}>
        <span>View Profile</span>
      </button>

    </div>
  )
}
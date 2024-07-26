import React, { useEffect, useRef } from "react";

export default function Loop() {
  const loop = useRef(null);

  useEffect(() => {
    const ul = loop.current;
    if (ul) {
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    }
  }, []);

  const messages = [
    "I AM SUSHANT KHADKA",
    "I AM A UIUX DESIGNER",
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul ref={loop} className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
        {Array.from({ length: 4 }).map((_, index) => (
          <React.Fragment key={index}>
            {messages.map((message, msgIndex) => (
              <li key={msgIndex}>
                <h2>{message}</h2>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

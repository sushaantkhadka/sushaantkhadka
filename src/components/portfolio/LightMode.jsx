import React from 'react'
import Uiux from './portfolioCard/Uiux'

export default function LightMode({}) {

  const portfolios = [
    {
      image: "image/portfolio/akriti.png",
      title: "Portfolio Design",
      desc: "Then to add a utility but only have it take effect at a certain breakpoint, all you need to do is prefix the utility with the breakpoint name, followed by the : character:",
      catagories: ["Web", "Portfolio"],
      link: "",
    },
    {
      image: "image/portfolio/audio book.png",
      title: "Audio Book Design",
      desc: "Every utility class in Tailwind can be applied conditionally at different breakpoints, which makes it a piece of cake to build complex responsive interfaces without ever leaving your HTML.",
      catagories: ["Blog", "App"],
      link: "",
    },
    {
      image: "image/portfolio/ephoria.png",
      title: "Portfolio Design",
      desc: "Here a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens:",
      catagories: ["Ecommerce", "Web"],
      link: "",
    },
    {
      image: "image/portfolio/ecommerce.png",
      title: "Ecommerce",
      desc: "This works for every utility class in the framework, which means you can change literally anything at a given breakpoint — even things like letter spacing or cursor styles.",
      catagories: ["Ecommerce", "Web"],
      link: "",
    },
    {
      image: "image/portfolio/health dashboard.png",
      title: "Health checkup",
      desc: "By default, the outer div is display: block, but by adding the md:flex utility, it becomes display: flex on medium screens and larger.",
      catagories: ["Service", "App"],
      link: "",
    },
  ];
  
  return (
    <div>
       {portfolios.map((portfolio, index) => (
        <Uiux portfolio={portfolio} index={index} />
       ))}
    </div>
  )
}

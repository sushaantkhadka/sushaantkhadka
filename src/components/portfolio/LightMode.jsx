import React from 'react'
import Uiux from './portfolioCard/Uiux'

export default function LightMode({}) {

  const portfolios = [
    {
      id: 1,
      image: "/image/Sample projects/com200.png",
      title: "Com-2000: AI + Web3 Accelerator",
      desc: "Leading AI+Web3 Accelerator across SE Asia, Vietnam, Singapore, Thailand, Hong Kong, Shenzhen, Taiwan, Switzerland, USA and UK dedicated to the development of ABCDE - AI, Blockchain, Cloud, Data & Ecommerce technologies. ",
      categories: ["Web", "Portfolio"],
      link: "https://com2000.netlify.app",
    },
    {
      id: 2,
      image: "/image/Sample projects/docdash.png",
      title: "DOCDASH- Digital HealthCare",
      desc: "Complete, collaborative and comprehensive health data fabric and integration platform",
      categories: ["Healthcare", "App"],
      link: "",
    },
    {
      id: 3,
      image: "/image/Sample projects/ebs.png",
      title: "Ecommerce Store",
      desc: "E-commerce Website is an online multi vendor service provider website, where user can order products, grocerry, beauty products and any other necessities. This platform connects users to the local market and companies",
      categories: ["Ecommerce", "Web"],
      link: "https://ebsstore.com",
    },
    {
      id: 4,
      image: "/image/Sample projects/sajilokar.png",
      title: "Sajilo Kar App",
      desc: "Sajilokar is a revolutionary mobile app that simplifies your tax management experience. We understand the challenges and complexities of tax payments, and our mission is to provide a seamless and convenient solution for individuals like you.",
      categories: ["Finance", "App"],
      link: "https://www.sajilokar.com",
    },
    {
      id: 5,
      image: "/image/Sample projects/canbea.png",
      title: "CanBe-A: A Social App",
      desc: "A social app set in a vibrant college environment. Customize your avatar, join clubs, and participate in exciting campus activities. CabBe-A combines social interaction with engaging experience, making it the ultimate virtual college experience.",
      categories: ["Social", "App"],
      link: "",
    },
    {
      id: 6,
      image: "/image/Sample projects/ewallet.png",
      title: "eWallet",
      desc: "A convenient digital wallet that allows users to connect multiple banks and make transactions directly from a single platform.",
      categories: ["Finance", "App" , "Web"],
      link: "",
    },
  ];
  
  return (
    <div>
      <h1 className='font-bold text-3xl text-center text-orange-500'>My Portfolio</h1>
       {portfolios.map((portfolio, index) => (
        <Uiux key={portfolio.id || index} portfolio={portfolio} index={index} />
       ))}
    </div>
  )
}

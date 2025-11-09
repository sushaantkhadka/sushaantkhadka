import React from 'react'
import { motion, useScroll } from "framer-motion"

export default function ProgressBar({ theme }) {
    const { scrollYProgress } = useScroll();
  return (
    <motion.div
        className={`fixed top-0 left-0 right-0 h-[2px] ${theme? "bg-green-500" : 'bg-orange-500'} origin-left z-10`}
        style={{ scaleX: scrollYProgress }}
      />
  )
}

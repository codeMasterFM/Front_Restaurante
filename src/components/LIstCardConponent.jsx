import React,{useState} from "react";
import CardConponent from "./CardConponent";
import { motion } from "framer-motion";

const LIstCardConponent = () => {

   const list = [
    "1",
    "11",
    "2",
    "3",
    "4",
    "6",
    "7",
    "8",
  ];
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="ListCard"
    >
      {list.map((data) => (
        <CardConponent data={data} key={data} item = {item} />
      ))}
    </motion.div>
  );
};

export default LIstCardConponent;


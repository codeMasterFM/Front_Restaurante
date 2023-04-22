import React,{useState,useEffect} from "react";
import CardConponent from "./CardConponent";
import { motion } from "framer-motion";

const LIstCardConponent = ({getdata}) => {
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
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: -120, opacity: 0 },
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
      {getdata !== null ? (getdata.map((data) => (
        <CardConponent item = {item} data={data} key={data.id}  />
      ))):(
      <div className="ContainerLoad">
   <div class="spinner center">
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
</div>
   </div>)}
    </motion.div>
  );
  
};

export default LIstCardConponent;


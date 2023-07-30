import React from "react";
import bebidas from "../asset/jugo.png";
import plato from "../asset/arros.png";
import postre from "../asset/galleta.png";
import soda from "../asset/soda.png"
import Food from '../asset/Food.png'
import postree from '../asset/Postree.png'
import { motion } from "framer-motion";
import { GetForCategory } from "../Requests/Reques";
const FooterConponent = ({ setdata }) => {
  const LoadData = async (categoria) => {
    const hola = await GetForCategory({ categoria });
    setdata(hola.data);
    // console.log(hola.data);
    console.log(categoria);
  };
  return (
    <div className="Container-Footer">
      <motion.div
         initial={{ opacity: 0 , y:200}}
         animate={{ opacity: 100, y:0 }}
         whileTap={{
           scale: 1.9
        }}
        onClick={() => {
          LoadData("bebidas");
        }}
      >
        <img src={soda} />
        <label> Bebida</label>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 , y:200}}
        animate={{ opacity: 100, y:0 }}
        whileTap={{
          scale: 1.9
       }}
        onClick={() => {
          LoadData("platos");
        }}
      >
        <img src={Food} />
        <label>platos</label>
      </motion.div>
      <motion.div
         initial={{ opacity: 0 , y:200}}
         animate={{ opacity: 100, y:0 }}
         whileTap={{
           scale: 1.9
        }}
        onClick={() => {
          LoadData("postres");
        }}
      >
        <img src={postree} />
        <label>postres</label>
      </motion.div>
    </div>
  );
};

export default FooterConponent;

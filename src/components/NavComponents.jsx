import React from "react";
import "./Component.css";
import mesa from "../asset/mesa.png";
import carritocompras from "../asset/carritocompras.png";
import lupa from "../asset/lupa.png";
import { motion } from "framer-motion";


const NavComponents = () => {
  return (
    <div className="Container-Nav">
      <div className="OneSetcion-nav"
      
      >
        <motion.label
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration:0.5 }}
          onClick={() => (window.location.href = "/")}
        >
          Frita
        </motion.label>
        <article>
          <motion.label
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            Mesa 4 -
          </motion.label>
          <motion.img
            src={mesa}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src={carritocompras}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          />
        </article>
      </div>
      <div className="Search-nav">
        <motion.input
          type="text"
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        />
        <motion.button
          initial={{ x: 100 }}
          animate={{ x: 0 }
        }
          
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
            
          }}
        >
          <img src={lupa} height={20} width={30} />
        </motion.button>
      </div>
    </div>
  );
};

export default NavComponents;

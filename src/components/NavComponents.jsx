import React,{useState} from "react";
import "./Component.css";
import mesa from "../asset/mesa.png";
import carritocompras from "../asset/carritocompras.png";
import lupa from "../asset/lupa.png";
import { motion, transform } from "framer-motion";
import { GetSearch } from "../Requests/Reques";


const NavComponents = ({setdata}) => {
  const urlparams = new URLSearchParams(window.location.search)
  const Nmesa = sessionStorage.getItem("M")
  const[Gettex,Setext] = useState();
  const Load = async (Containt) =>{
     const hola = await GetSearch(Containt);
     setdata(hola.data)
     console.log(hola.data)
  }
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
            Mesa {Nmesa} -
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
            onClick={()=> window.location.href ="/sales"}
          />
        </article>
      </div>
      <div className="Search-nav">
        <motion.input
        onChange={(e)=>{Setext(e.target.value)}}
        value = {Gettex}
          type="text"
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        />
        <motion.button
        onClick={()=>{Load(Gettex)}}
          initial={{ x: 100}}
          animate={{ x: 0 }}
          whileTap={{
          backgroundColor:"#088395",
          transition: { duration: 0.1 } 
          }}
        >
          <img src={lupa} height={20} width={30} />
        </motion.button>
      </div>
    </div>
  );
};

export default NavComponents;

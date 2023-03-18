import React,{useState} from "react";
import papa from "../asset/papa.png";
import { motion } from "framer-motion";
import swal from "sweetalert";

const CardConponent = ({data,item}) => {
    const [selectedId, setSelectedId] = useState(null)
  return (
    <motion.div
    onClick={() => {setSelectedId(data)
    }}
    variants={item}
    className="Container-Card">
      <img src={papa} />
      <div className="Describe-Card">
        <label>Hamburguesa con Queso</label>
        <label className="Precio-Card">Rd$ 80.00</label>
        <label className="Precio-Card">{data}</label>
        <motion.button
          whileTap={{
            borderRadius: "0px",
          }}
          onClick = {()=> swal(
            {
                title: "Pedido Encargado Exito ",
                text: "Su orden esta en camino ",
                icon: "success",
                button: "Aceptar"
            }
          )}
        >
          ordenar
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CardConponent;

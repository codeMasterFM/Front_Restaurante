import React, { useState } from "react";
import papa from "../asset/papa.png";
import { motion } from "framer-motion";
import swal from "sweetalert";

const CardConponent = ({ data, item }) => {
  //const [selectedId, setSelectedId] = useState(null);
  return (
    <motion.div variants={item} className="Container-Card">
      <img src={`data:image/png;base64,${data.image}`} alt="Imagen" />
      <div className="Describe-Card">
        <label className="Card-Title">{data.name}</label>
        <label className="Precio-Card">Rd$ {data.price}.00</label>
        <motion.button
          whileTap={{
            borderRadius: "0px",
          }}
          onClick={() =>
            swal({
              title: "Pedido Encargado Exito ",
              text: `Su ${data.name} esta en camino `,
              icon: "success",
              button: "Aceptar",
            })
          }
        >
          ordenar
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CardConponent;

import React, { useState } from "react";
import {  motion } from "framer-motion";
import swal from "sweetalert";
import { PostSale } from "../Requests/Reques";

const CardConponent = ({ data, item },CardType) => {
const fecha = new Date();
const fechaActual = fecha.toLocaleString()
  const Postdata = async (id) =>{
  const datasale ={
    ventasID: 0,
    proudctoID: id,
    mesa: "string",
    status: "string",
    negocioID: 0,
    fecha: fechaActual
  }
  await PostSale(datasale);
}
  //const [selectedId, setSelectedId] = useState(null);
  return (
    <motion.div variants={item} className="Container-Card">
      <img src={`data:image/png;base64,${data.image}`} alt="Imagen" />
      <div className="Describe-Card">
        <label className="Card-Title">{data.name}</label>
        <label className="Precio-Card">Rd$ {data.price}.00</label>
        <motion.button
         style={{backgroundColor:`${CardType.backgroundColor}`}}
          whileTap={{
            borderRadius: "0px",
          }}
          
          onClick={() =>{
            Postdata(data.proudctoID)
            swal({
              title: "Pedido Encargado Exito ",
              text: `Su ${data.name} esta en camino `,
              icon: "success",
              button: "Aceptar",
            })
          }
          }
        >
          ordenar
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CardConponent;

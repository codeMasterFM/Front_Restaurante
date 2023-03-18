import React from "react";
import bebidas from "../asset/bebidas.png";
import plato from "../asset/platos.png";
import postre from "../asset/postres.png";
const FooterConponent = () => {
  return (
    <div className="Container-Footer">
      <div>
        <img src={bebidas} />
        <label> Bebida</label>
      </div>
      <div>
        <img src={plato} />
        <label>platos</label>
      </div>
      <div>
        <img src={postre} />
        <label>postres</label>
      </div>
    </div>
  );
};

export default FooterConponent;

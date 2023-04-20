import React, { useState, useEffect } from "react";
import FooterConponent from "../components/FooterConponent";
import LIstCardConponent from "../components/LIstCardConponent";
import NavComponents from "../components/NavComponents";
import { GetSale } from "../Requests/Reques";
const Sales = () => {
  const [getdata, setdata] = useState(null);
  const CardType = ["red","#fff"];
  const LoadData = async () => {
    const hola = await GetSale();
    setdata(hola.data);
  };

  useEffect(() => {
    LoadData();
  }, []);
  return (
    <>
      <div>
        <NavComponents setdata={setdata} />
      </div>
      <div className="Content-Card">
        <LIstCardConponent getdata={getdata} CardType={CardType} />
      </div>
      <FooterConponent setdata={setdata} />
    </>
  );
};

export default Sales;

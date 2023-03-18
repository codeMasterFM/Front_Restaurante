import React from "react";
import CardConponent from "../components/CardConponent";
import FooterConponent from "../components/FooterConponent";
import LIstCardConponent from "../components/LIstCardConponent";
import NavComponents from "../components/NavComponents";

export const Home = () =>
<>
<div>
   <NavComponents/>
   </div>
   <div className="Content-Card">
   <LIstCardConponent/>
   </div>
   <FooterConponent/>
</>

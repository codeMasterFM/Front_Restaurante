import React,{useState,useEffect} from "react";
import FooterConponent from "../components/FooterConponent";
import LIstCardConponent from "../components/LIstCardConponent";
import NavComponents from "../components/NavComponents";
import { GetAll } from "../Requests/Reques";

export const Home = () => {
   const[getdata,setdata] =useState(null);
  const LoadData = async () => {
    const hola = await GetAll()
    setdata(hola.data)
    console.log(hola.data)
    
  console.log(getdata)
  }

  useEffect(() =>{
    LoadData();
  }
  ,[])
return (
   <>
<div>
   <NavComponents setdata={setdata}/>
   </div>
   <div className="Content-Card">
   <LIstCardConponent getdata={getdata}/>
   </div>
   <FooterConponent setdata={setdata}/>
</>)
}

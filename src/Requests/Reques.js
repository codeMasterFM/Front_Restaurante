import React,{useState} from "react";
import axios from "axios";
const url1 = "https://frita.somee.com/";
const url3 = "https://localhost:7052/";
const url2 = "http://Fritasoft.somee.com/";




const SaveUsuario = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const negocioId = await urlParams.get("N");
  const Mesa = urlParams.get("M");
if (negocioId != null && Mesa != null) {
  await sessionStorage.setItem("M",Mesa)
  await sessionStorage.setItem("N",negocioId)
}
  
  
}
//Obtener todos los productos de una empresa
export const GetAll = async () => {
  await SaveUsuario();
  console.log()
  const urlParams = new URLSearchParams(window.location.search);
  const negocioId = await sessionStorage.getItem("N")
  const Mesa = urlParams.get("M");
  return await axios.get(`${url2}Productos/business/${negocioId}`);
};
//Obtener los productos por su categoria
export const GetForCategory = async ({ categoria }) =>
  await axios.get(`${url2}Productos/${categoria}`);

//Obtener los productos en el buscador
export const GetSearch = async (Containt) =>
  axios.get(`${url2}Productos/Containt/${Containt}`);

//Ordenar pedido
export const PostSale = async (data) => {
  const urlParams = new URLSearchParams(window.location.search);
  const negocioId = await sessionStorage.getItem("N")
  const Mesa = await sessionStorage.getItem("M")
  data["mesa"] = Mesa;
  data["status"] = "no pagado" 
  data["negocioID"] = negocioId
  console.log(data)
try {
    const result = await axios.post(`${url2}ventas`,data)
} catch (error) {
    console.log(error)
}

};

//Obtener lista De Pedidos 
export const GetSale = async () =>{
const urlParams = new URLSearchParams(window.location.search);
  const negocioId = await sessionStorage.getItem("N")
  const Mesa = await sessionStorage.getItem("M")
  return await axios.get(`${url2}ventas/${Mesa}/${negocioId}`);
}

export const Negocio = async () =>{
  const urlParams = new URLSearchParams(window.location.search);
  const negocioId = await sessionStorage.getItem("N")
  const Mesa = await sessionStorage.getItem("M")
  return await axios.get(`${url2}Negocios/${negocioId}`);
}
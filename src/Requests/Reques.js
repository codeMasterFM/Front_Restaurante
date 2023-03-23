import axios from "axios";
const url1 = 'https://frita.somee.com/'
const url2 = 'https://localhost:7052/'

export const GetAll = async () =>
await axios.get(`${url1}Productos`);

export const GetForCategory = async ({categoria}) =>
await axios.get(`${url1}Productos/${categoria}`);

export const GetSearch = async (Containt) =>
axios.get(`${url1}Productos/Containt/${Containt}`)
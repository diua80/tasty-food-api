import axios from 'axios';
import { RecepiesAPI } from './RecepiesAPI';
const api = new RecepiesAPI();

const listCategories = document.getElementById("categories-list");
const listRecepies = document.getElementById("recepies-list");

async function getCategories() {
  try {
    const data = await api.getAllCategories();
    createCategoriesList(data);
    } catch (err) {
    console.log(err);
  }
}

getCategories();

function createCategoriesList(data) {
    const markup = data.map((el)=>`<li>${el.name}</li>`).join();
    listCategories.insertAdjacentHTML("afterbegin", markup);
}

listCategories.addEventListener("click", onCategorieClick);

async function onCategorieClick(event) {
    if (event.target.nodeName !== 'LI') return;
    const category = event.target.textContent;
    console.log(category);
    try {
        const data = await api.getRecepiesByCategorie(category);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
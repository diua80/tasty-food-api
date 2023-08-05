import axios from "axios";
export class RecepiesAPI{
   async getAllCategories() {
       const url = "https://tasty-treats-backend.p.goit.global/api/categories";
       try {
           const data = await axios(url);
           return data.data;
       } catch (err) {
           console.log(err);
       }
    }

    async getRecepiesByCategorie(category) {
        const url = `https://tasty-treats-backend.p.goit.global/api/recipes?category=${category}&page=1&limit=6&time=160&area=Irish&ingredient=640c2dd963a319ea671e3796`;
        try {
            const data = await axios(url);
            console.log(data);
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }
}
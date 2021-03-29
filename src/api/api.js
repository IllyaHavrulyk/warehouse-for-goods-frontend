import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8080"
});

export const goodsApi = {

    initialGoods() {
        return instance.get("/product/list");
        //return axios.get("http://localhost:3001/Products");
    },
    putGoods(data) {
        return instance.post("/product/save", data);
        //return axios.post("http://localhost:3001/Products", data);
    },
    deleteGoods(goodsId) {
        return instance.delete("/product/delete/" + goodsId);
        //return axios.delete("http://localhost:3001/Products/" + goodsId);
    },
    editGoods(goods) {
        return instance.post("/product/update/" + goods.id, goods);
    },
    getGoods(goodsId) {
        return instance.get("/product/get/" + goodsId);
        //return axios.get("http://localhost:3001/Products/" + goodsId);
    },
    filter(minPrice, maxPrice) {
        return instance.get(`/product/filter?minPrice=${minPrice}&maxPrice=${maxPrice}`);
    },
    isLogin() {
        return instance.get(`/login`)
    },
    login(userData) {
        return axios.get(`http://localhost:8080/login`,
            { headers: { authorization: 'Basic ' + window.btoa(userData.username + ":" + userData.password) } }
        );
    },
    searchGoods(goodsData) {
        return axios.get("http://localhost:8080/product/search/" + goodsData);
    },
    registration(login, password) {
        return instance.post("/registration", { username: login, password });
    },
    logout() {
        return instance.post("/logout");
    }
}

import axios from "axios";

let instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        withCredentials: true,
        "Access-Control-Allow-Origin": "http://localhost:3000"
    }
});

export const goodsApi = {

    initialGoods(warehouseId) {
        return instance.get("/product/list?warehouseId=" + warehouseId);
        //return axios.get("http://localhost:3001/Products");
    },
    putGoods(data, warehouseId) {
        return instance.post("/product/save?warehouseId=" + warehouseId, data);
        //return axios.post("http://localhost:3001/Products", data);
    },
    deleteGoods(goodsId, warehouseId) {
        return instance.delete(`/product/delete/${warehouseId}/${goodsId}`);
        //return axios.delete("http://localhost:3001/Products/" + goodsId);
    },
    editGoods(goods) {
        return instance.post("/product/update/" + goods.id, goods);
    },
    getGoods(goodsId) {
        return instance.get("/product/get/" + goodsId);
        //return axios.get("http://localhost:3001/Products/" + goodsId);
    },
    filter(minPrice, maxPrice, warehouseId) {
        return instance.get(`/product/filter?warehouseId=${warehouseId}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
    },
    isLogin() {
        return instance.get(`/login`)
    },
    login(userData) {
        return instance.get(`/login`,
            { headers: { authorization: 'Basic ' + window.btoa(userData.username + ":" + userData.password) } }
        );
    },
    searchGoods(goodsData, warehouseId) {
        return instance.get(`/product/search/${goodsData}?warehouseId=${warehouseId}`);
    },
    registration(login, password) {
        return instance.post("/registration", { username: login, password });
    },
    logout() {
        return instance.post("/logout");
    },
    getWarehouses() {
        return instance.get("/warehouse/list");
    },
    addWarehouse(name) {
        return instance.post("/warehouse/save", { name });
    },
    deleteWarehouse(id) {
        return instance.delete("/warehouse/delete/" + id);
    }
}

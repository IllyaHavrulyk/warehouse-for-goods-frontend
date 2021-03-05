import axios from "axios";

export const goodsApi = {
    initialGoods() {
        return axios.get("http://localhost:8080/product/list");
        //return axios.get("http://localhost:3001/Products");
    },
    putGoods(data) {
        return axios.post("http://localhost:8080/product/save", data);
        //return axios.post("http://localhost:3001/Products", data);
    },
    deleteGoods(goodsId) {
        return axios.delete("http://localhost:8080/product/delete/" + goodsId);
        //return axios.delete("http://localhost:3001/Products/" + goodsId);
    },
    editGoods(goods) {
        return axios.post("http://localhost:8080/product/update/" + goods.id, goods);
        //return axios.put("http://localhost:3001/Products/" + goods.id, goods);
    },
    getGoods(goodsId) {
        return axios.get("http://localhost:8080/product/get/" + goodsId);
        //return axios.get("http://localhost:3001/Products/" + goodsId);
    }
}

import axios from "axios";

export const goodsApi = {
    initialGoods() {
        return axios.get("http://localhost:3001/Products");
    },
    putGoods(data) {
        return axios.post("http://localhost:3001/Products", data);
    },
    deleteGoods(goodsId) {
        return axios.delete("http://localhost:3001/Products/" + goodsId);
    },
    editGoods(goods) {
        return axios.patch("http://localhost:3001/Products/" + goods.id, goods);
    },
    getGoods(goodsId) {
        return axios.get("http://localhost:3001/Products/" + goodsId);
    }
}
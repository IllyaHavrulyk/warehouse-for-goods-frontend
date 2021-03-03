import axios from "axios";

export const goodsApi = {
    initialGoods() {
        return axios.get("http://localhost:8080/product/list");
    },
    putGoods(data) {
        return axios.post("http://localhost:8080/product/save", data);
    },
    deleteGoods(goodsId) {
        return axios.delete("http://localhost:8080/product/delete/" + goodsId);
    },
    editGoods(goods) {
        return axios.put("http://localhost:8080/product/update/" + goods.id, goods);
    },
    getGoods(goodsId) {
        return axios.get("http://localhost:8080/product/get/" + goodsId);
    }
}

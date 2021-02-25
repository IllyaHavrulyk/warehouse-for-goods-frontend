import axios from "axios";

export const goodsApi = {
    initialGoods() {
        return axios.get("http://localhost:3001/Products");
    },
    putGoods(data) {
        return axios.post("http://localhost:3001/Products", data);
    }
}
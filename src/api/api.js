import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8080"
});

export const goodsApi = {

    initialGoods() {
        return axios.get("http://localhost:8080/product/list", {
            headers: {
                authorization: 'Basic ' + window.btoa("user123" + ":" + "user123"),
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }

        });
        //return axios.get("http://localhost:3001/Products");
    },
    putGoods(data) {
        return instance.post("/product/save", data, {
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        });
        //return axios.post("http://localhost:3001/Products", data);
    },
    deleteGoods(goodsId) {
        return instance.delete("/product/delete/" + goodsId, {
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        });
        //return axios.delete("http://localhost:3001/Products/" + goodsId);
    },
    editGoods(goods) {
        return instance.post("/product/update/" + goods.id, goods, {
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        });
    },
    getGoods(goodsId) {
        return instance.get("/product/get/" + goodsId, {
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        });
        //return axios.get("http://localhost:3001/Products/" + goodsId);
    },
    filter(minPrice, maxPrice) {
        return instance.get(`/product/filter?minPrice=${minPrice}&maxPrice=${maxPrice}`, {
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        });
    },
    isLogin() {
        return axios.get(`http://localhost:8080/login`, {
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        })
    },
    login(userData) {
        return axios.get(`http://localhost:8080/login`,
            { headers: { authorization: 'Basic ' + window.btoa(userData.username + ":" + userData.password), "Access-Control-Allow-Origin": "http://localhost:3000" } }
        );
    },
    searchGoods(goodsData) {
        return axios.get("http://localhost:8080/product/search/" + goodsData, {
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        });
    },
    registration(login, password) {
        return instance.post("/registration", { username: login, password }, {
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        });
    },
    logout() {
        return instance.post("/logout", {
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        });
    }
}

import axios from "axios";

let instance = axios.create({
  withCredentials: true,
  baseURL: "http://warehouseforgoods-env-1.us-east-2.elasticbeanstalk.com",
  redirect: "error",
});

export const goodsApi = {
  initialGoods(warehouseId) {
    return instance.get("/product/list?warehouseId=" + warehouseId, {
      headers: {
        "Access-Control-Allow-Origin": "http://fierce-gorge-15492.herokuapp.com",
        authorization: "Basic " + localStorage.getItem("userData"),
      },
    });
    //return axios.get("http://localhost:3001/Products");
  },
  putGoods(data, warehouseId) {
    return instance.post("/product/save?warehouseId=" + warehouseId, data, {
      headers: {
        "Access-Control-Allow-Origin": "http://fierce-gorge-15492.herokuapp.com",
        authorization: "Basic " + localStorage.getItem("userData"),
      },
    });
    //return axios.post("http://localhost:3001/Products", data);
  },
  deleteGoods(goodsId, warehouseId) {
    return instance.delete(`/product/delete/${warehouseId}/${goodsId}`, {
      headers: {
        "Access-Control-Allow-Origin": "http://fierce-gorge-15492.herokuapp.com",
        authorization: "Basic " + localStorage.getItem("userData"),

      },
    });
    //return axios.delete("http://localhost:3001/Products/" + goodsId);
  },
  editGoods(goods) {
    return instance.post("/product/update/" + goods.id, goods, {
      headers: {
        "Access-Control-Allow-Origin": "http://fierce-gorge-15492.herokuapp.com",
        authorization: "Basic " + localStorage.getItem("userData"),
      },
    });
  },
  getGoods(goodsId) {
    return instance.get("/product/get/" + goodsId, {
      headers: {
        "Access-Control-Allow-Origin": "http://fierce-gorge-15492.herokuapp.com",
        authorization: "Basic " + localStorage.getItem("userData"),
      },
    });
    //return axios.get("http://localhost:3001/Products/" + goodsId);
  },
  filter(minPrice, maxPrice, warehouseId) {
    return instance.get(
      `/product/filter?warehouseId=${warehouseId}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "http://fierce-gorge-15492.herokuapp.com",
          authorization: "Basic " + localStorage.getItem("userData"),
        },
      }
    );
  },
  isLogin() {
    return instance.get(`/login`, {
      headers: {
        "Access-Control-Allow-Origin": "http://fierce-gorge-15492.herokuapp.com",
        authorization: "Basic " + localStorage.getItem("userData"),
      },
    });
  },
  login(userData) {
    localStorage.setItem(
      "userData",
      window.btoa(userData.username + ":" + userData.password)
    );
    return axios.get(`http://warehouseforgoods-env-1.us-east-2.elasticbeanstalk.com/login`, {
      headers: {
        authorization: "Basic " + localStorage.getItem("userData"),
        "Access-Control-Allow-Origin": "http://fierce-gorge-15492.herokuapp.com",
      },
    });
  },
  searchGoods(goodsData, warehouseId) {
    return instance.get(
      `/product/search/${goodsData}?warehouseId=${warehouseId}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "http://fierce-gorge-15492.herokuapp.com",
          authorization: "Basic " + localStorage.getItem("userData"),
        },
      }
    );
  },
  registration(login, password) {
    return instance.post(
      "/registration",
      { username: login, password },
      {
        headers: {
          "Access-Control-Allow-Origin": "http://fierce-gorge-15492.herokuapp.com",
        },
      }
    );
  },
  logout() {
    localStorage.removeItem("userData");
    return instance.post("/logout", {
      headers: {
        "Access-Control-Allow-Origin": "http://fierce-gorge-15492.herokuapp.com",
      },
    });
  },
  getWarehouses() {
    return instance.get("/warehouse/list", {
      headers: {
        "Access-Control-Allow-Origin": "http://fierce-gorge-15492.herokuapp.com",
        authorization: "Basic " + localStorage.getItem("userData"),
      },
    });
  },
  addWarehouse(name) {
    return instance.post(
      "/warehouse/save",
      { name },
      {
        headers: {
          "Access-Control-Allow-Origin": "http://fierce-gorge-15492.herokuapp.com",
          authorization: "Basic " + localStorage.getItem("userData"),
        },
      }
    );
  },
  deleteWarehouse(id) {
    return instance.delete("/warehouse/delete/" + id, {
      headers: {
        "Access-Control-Allow-Origin": "http://fierce-gorge-15492.herokuapp.com",
        authorization: "Basic " + localStorage.getItem("userData"),
      },
    });
  },
  listStats() {
    return instance.get("/stats/list", {
      headers: {
        "Access-Control-Allow-Origin": "http://fierce-gorge-15492.herokuapp.com",
        authorization: "Basic " + localStorage.getItem("userData"),
      },
    });
  },
};

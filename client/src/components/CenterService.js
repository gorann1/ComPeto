import http from "../http-common";

class CenterService {
  getAll() {
    return http.get("/centers");
  }

  get(id) {
    return http.get(`/centers/${id}`);
  }

  create(data) {
    return http.post("/centers", data);
  }

  update(id, data) {
    return http.put(`/centers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/centers/${id}`);
  }

  deleteAll() {
    return http.delete(`/centers`);
  }

  findByTitle(name) {
    return http.get(`/centers?tname=${name}`);
  }
}

export default new CenterService();
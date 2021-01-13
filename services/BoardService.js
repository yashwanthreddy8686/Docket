import axios from "axios";

class BoardService {
  static create(projectId, data = {}) {
    return axios
      .post(`/api/boards/`, { ...data, project: projectId })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data;
      });
  }
  static update(projectId, boardId, data = {}) {
    return axios
      .put(`/api/boards/${boardId}/`, { ...data, project: projectId })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data;
      });
  }
  static delete(boardId) {
    return axios
      .delete(`/api/boards/${boardId}/`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data;
      });
  }
}

export default BoardService;

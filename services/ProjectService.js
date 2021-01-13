import axios from "axios";

class ProjectService {
  static create(data) {
    return axios
      .post("/api/projects/", data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data;
      });
  }
  static delete(projectId) {
    return axios
      .delete(`/api/projects/${projectId}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data;
      });
  }
}

export default ProjectService;

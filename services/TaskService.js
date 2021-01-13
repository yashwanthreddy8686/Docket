import axios from "axios";

class TaskService {
  static create(boardId, data = {}) {
    return axios
      .post(`/api/boards/${boardId}/tasks/`, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data;
      });
  }
  static createBoardTask(taskId, boardId) {
    return axios
      .post(`/api/boards/${boardId}/tasks/`, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data;
      });
  }
}

export default TaskService;

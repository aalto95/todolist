import axios from "axios";

const instance = axios.create({
  baseURL: "https://60a0e51dd2855b00173b15c9.mockapi.io/",
});

export const todoAPI = {
  getTasks: () => {
    return instance.get(`todolist`).then((response) => {
      return response.data;
    });
  },
  createTask: (text: string) => {
    return instance
      .post(`todolist`, { text, isChecked: false })
      .then((response) => {
        return response.data;
      });
  },
  toggleIsChecked: (id: string, isChecked: boolean) => {
    return instance.put(`todolist/${id}`, { isChecked }).then((response) => {
      return response.data;
    });
  },
  deleteTask: (id: string) => {
    return instance.delete(`todolist/${id}`).then((response) => {
      return response.data;
    });
  },
  editTaskText: (id: string, text: string) => {
    return instance.put(`todolist/${id}`, { text }).then((response) => {
      return response.data;
    });
  },
};

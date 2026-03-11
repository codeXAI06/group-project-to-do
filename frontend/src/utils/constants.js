export const BASE_URL = "http://localhost:5000/api";

export const API_ENDPOINTS = {
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",

  TASKS: "/tasks",
  TASK_BY_ID: (id) => `/tasks/${id}`,
};
//dynamic endpoint for task by id, we can use it like API_ENDPOINTS.

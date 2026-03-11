import { apiRequest } from "../api/api";
import { API_ENDPOINTS } from "../utils/constants";

export const getAllTasks = (token) => {
  return apiRequest(API_ENDPOINTS.TASKS, "GET", null, token);
};

export const getTaskById = (id, token) => {
  return apiRequest(API_ENDPOINTS.TASK_BY_ID(id), "GET", null, token);
};

export const createTask = (task, token) => {
  return apiRequest(API_ENDPOINTS.TASKS, "POST", task, token);
};

export const updateTask = (id, task, token) => {
  return apiRequest(API_ENDPOINTS.TASK_BY_ID(id), "PUT", task, token);
};

export const deleteTask = (id, token) => {
  return apiRequest(API_ENDPOINTS.TASK_BY_ID(id), "DELETE", null, token);
};
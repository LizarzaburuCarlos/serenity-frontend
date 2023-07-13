import { AcademicInformationType } from "../types/academic-information.type";
import axiosClient from "../utils/api/clientAxios";

const API = axiosClient.getUri();

const url = `${API}/academic-information`;

export const getAllAI = async () => {
  return await axiosClient.get(url);
};

export const getAIByID = async (id: number) => {
  return await axiosClient.get(`${url}/${id}`);
};

export const getAIByUserID = async (userId: number) => {
  return await axiosClient.get(`${url}/user/${userId}`);
};

export const createAI = async (ai: Omit<AcademicInformationType, "id">) => {
  return await axiosClient.post(url, ai);
};

export const editAI = async (
  ai: Omit<AcademicInformationType, "id" | "userId">,
  id: number
) => {
  return await axiosClient.put(`${url}/${id}`, ai);
};

export const deleteAI = async (id: number) => {
  return await axiosClient.delete(`${url}/${id}`);
};

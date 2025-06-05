import { createAsyncThunk } from "@reduxjs/toolkit";

import AxiosClient from "@/utils/axios";

// demo for get all data
export const getAllData = createAsyncThunk(
  "demo/getAllDataAsync",
  async (params: object, toolkit) =>
    AxiosClient({
      toolkit,
      url: "/user",
      method: "get",
      params,
    })
);

// demo for get by id
export const getDataById = createAsyncThunk(
  "demo/getDataByIdAsync",
  async (id: string, toolkit) =>
    AxiosClient({
      toolkit,
      url: `/user/${id}`,
      method: "get",
    })
);

// demo for create on json data

export const createDataJson = createAsyncThunk(
  "demo/createDataAsync",
  async (data: object, toolkit) =>
    AxiosClient({
      toolkit,
      url: "/user/create",
      method: "post",
      data,
    })
);

// demo for create on formData
export const createDataFormData = createAsyncThunk(
  "demo/createDataFormdataAsync",
  async (data: any, toolkit) =>
    AxiosClient({
      toolkit,
      url: "/user/create",
      method: "post",
      data,
    })
);

// demo for update
export const updateData = createAsyncThunk(
  "demo/updateDataAsync",
  async ({ id, data }: { id: string; data: object }, toolkit) =>
    AxiosClient({
      toolkit,
      url: `/user/update/${id}`,
      method: "patch",
      data,
    })
);

// demo for delete

export const deleteData = createAsyncThunk(
  "demo/deleteDataAsync",
  async (id: string, toolkit) =>
    AxiosClient({
      toolkit,
      url: `/user/delete/${id}`,
      method: "delete",
    })
);

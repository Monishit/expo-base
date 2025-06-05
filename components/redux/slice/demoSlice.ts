import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllData } from "../services/demoService";
import { userInterface } from "@/components/interface/demoInterface";

const initialState: userInterface = {
  isUserLoading: false,
  isUserSubmiting: false,
  isUserDeleting: false,
  userList: [],
  userById: null,
};

const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(getAllData.pending), (state) => {
      state.isUserLoading = true;
    });
    builder.addMatcher(isAnyOf(getAllData.fulfilled), (state, { payload }) => {
      state.isUserLoading = false;
      state.userList = payload?.data;
    });
    builder.addMatcher(isAnyOf(getAllData.rejected), (state) => {
      state.isUserLoading = false;
    });
  },
});

export default demoSlice.reducer;

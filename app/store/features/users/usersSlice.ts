import { createSlice } from "@reduxjs/toolkit";
import { UsersState } from "@/app/utils/types/usersTypes";

const initialState: UsersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;

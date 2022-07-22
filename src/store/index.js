import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../features/users/user-slice";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
  },
});

export default store;

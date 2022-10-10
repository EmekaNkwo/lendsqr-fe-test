import { configureStore } from "@reduxjs/toolkit";

import { fetchUsers } from "../services/fetchUsers";

export default configureStore({
  reducer: {
    [fetchUsers.reducerPath]: fetchUsers.reducer,
  },
});

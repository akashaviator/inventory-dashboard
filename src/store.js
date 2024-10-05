import { configureStore } from "@reduxjs/toolkit"
import inventoryReducer from "./features/Dashboard/inventorySlice"

const store = configureStore({
  reducer: {
    items: inventoryReducer,
  },
})

export default store

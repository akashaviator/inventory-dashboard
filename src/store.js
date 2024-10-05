import { configureStore } from "@reduxjs/toolkit"
import inventoryReducer from "./features/Dashboard/inventorySlice"

const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
})

export default store

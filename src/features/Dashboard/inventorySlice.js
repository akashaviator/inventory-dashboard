import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setItems(state, action) {
      return action.payload
    },
    deleteItem(state, action) {
      console.log("deleting in", action)
      const newState = state.filter((item) => item.name !== action.payload.name)
      console.log("new state", newState)
      return newState
    },
    disableItem(state, action) {
      const item = state.find((item) => item.name === action.payload.name)
      if (item) {
        item.disabled = !item.disabled
      }
      console.log("item", state)
    },
    editItem(state, action) {
      const { name, newData } = action.payload
      const item = state.find((item) => item.name === name)
      if (item) {
        Object.assign(item, newData)
      }
    },
  },
})

export const { setItems, deleteItem, disableItem, editItem } =
  inventorySlice.actions
export default inventorySlice.reducer

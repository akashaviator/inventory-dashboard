import { createSlice } from "@reduxjs/toolkit"
import { calculateInventoryStats } from "../../utils/helper"

const initialState = {
  totalProducts: 0,
  totalValue: 0,
  outOfStock: 0,
  noOfCategories: 0,
  products: [],
}

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setItems(state, action) {
      console.log("setting", action)
      const stats = calculateInventoryStats(action.payload)
      return { ...stats, products: action.payload }
    },
    deleteItem(state, action) {
      console.log("deleting in", action)
      const products = state.products.filter(
        (item) => item.name !== action.payload.name
      )
      console.log("new state", products)
      const stats = calculateInventoryStats(products)

      return { ...stats, products: products }
    },
    disableItem(state, action) {
      const products = state.products.map((item) => {
        if (item.name === action.payload.name) {
          item.disabled = !item.disabled
        }
        return item
      })
      const newState = { ...state, products: products }
      return newState
    },
    editItem(state, action) {
      const { name, newData } = action.payload
      const products = state.products.map((item) => {
        if (item.name === name) {
          Object.assign(item, newData)
        }
        return item
      })
      const stats = calculateInventoryStats(products)

      return { ...stats, products: products }
    },
  },
})

export const { setItems, deleteItem, disableItem, editItem } =
  inventorySlice.actions
export default inventorySlice.reducer

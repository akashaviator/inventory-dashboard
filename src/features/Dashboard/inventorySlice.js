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
      const stats = calculateInventoryStats(action.payload)
      return { ...stats, products: action.payload }
    },
    deleteItem(state, action) {
      const products = state.products.filter(
        (item) => item.name !== action.payload.name
      )
      const stats = calculateInventoryStats(products)
      return { ...stats, products: products }
    },
    disableItem(state, action) {
      const products = state.products.map((item) => {
        const product = { ...item }
        if (item.name === action.payload.name) {
          product.disabled = !item.disabled
        }
        return product
      })

      return { ...state, products: products }
    },
    editItem(state, action) {
      const { name, newData } = action.payload
      console.log("payload", action)
      const products = state.products.map((item) => {
        console.log("editing item", item)
        let editedProduct = { ...item }
        if (item.name === name) {
          editedProduct = Object.assign(editedProduct, newData)
        }
        console.log(editedProduct)
        return editedProduct
      })
      const stats = calculateInventoryStats(products)

      const newState = { ...stats, products: products }
      console.log("new", newState)
      return newState
    },
  },
})

export const { setItems, deleteItem, disableItem, editItem } =
  inventorySlice.actions
export default inventorySlice.reducer

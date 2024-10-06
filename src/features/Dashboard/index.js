import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import { Box, Stack, Typography } from "@mui/material"
import InventoryTable from "../../components/InventoryTable"
import Header from "./Header"
import { setItems } from "./inventorySlice"
import { useDispatch, useSelector } from "react-redux"
import EditProduct from "../../components/EditProduct"
import Stats from "../../components/Stats"

export default function BasicTable() {
  const inventory = useSelector((state) => state.inventory)
  const [isUserView, setIsUserView] = useState(false)
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const editProduct = useRef(null)

  const openEditModal = (row) => {
    console.log("opening")
    editProduct.current = row
    setShowModal(true)
  }
  const closeEditModal = () => {
    editProduct.current = null
    setShowModal(false)
  }

  useEffect(() => {
    axios
      .get("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory")
      .then((res) => {
        dispatch(setItems(res.data))
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Box sx={{ width: "60vw" }}>
      <Header checked={isUserView} setIsUserView={setIsUserView} />
      <Typography align="left" fontSize={42}>
        Inventory stats
      </Typography>
      <Stats inventory={inventory} />
      <InventoryTable
        products={inventory.products}
        disableActions={isUserView}
        openEditModal={openEditModal}
      />
      {showModal ? (
        <EditProduct
          product={editProduct.current}
          showModal={showModal}
          onClose={closeEditModal}
        />
      ) : null}
    </Box>
  )
}

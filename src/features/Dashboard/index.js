import React, { useEffect, useState } from "react"
import axios from "axios"
import { Box } from "@mui/material"
import InventoryTable from "./InventoryTable"
import Header from "./Header"
import { setItems } from "./inventorySlice"
import { useDispatch, useSelector } from "react-redux"

export default function BasicTable() {
  const inventory = useSelector((state) => state)
  const [isUserView, setIsUserView] = useState(false)
  const dispatch = useDispatch()

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
      <InventoryTable data={inventory} />
    </Box>
  )
}

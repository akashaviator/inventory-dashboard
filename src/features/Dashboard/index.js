import React, { useEffect, useState } from "react"
import axios from "axios"
import { Box, Stack, Typography } from "@mui/material"
import InventoryTable from "./InventoryTable"
import Header from "./Header"
import { setItems } from "./inventorySlice"
import { useDispatch, useSelector } from "react-redux"
import Stat from "./Stat"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange"
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart"
import CategoryIcon from "@mui/icons-material/Category"

export default function BasicTable() {
  const inventory = useSelector((state) => state.inventory)
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

      <Typography align="left" fontSize={42}>
        Inventory stats
      </Typography>
      <Stack direction="row" justifyContent="space-between" mt={2}>
        <Stat
          icon={<ShoppingCartIcon />}
          label="Total Products"
          value={inventory.totalProducts}
        />
        <Stat
          icon={<CurrencyExchangeIcon />}
          label="Total Store Value"
          value={inventory.totalValue}
        />
        <Stat
          icon={<RemoveShoppingCartIcon />}
          label="Out Of Stock"
          value={inventory.outOfStock}
        />
        <Stat
          icon={<CategoryIcon />}
          label="No. Of Categories"
          value={inventory.noOfCategories}
        />
      </Stack>
      <InventoryTable products={inventory.products} />
    </Box>
  )
}

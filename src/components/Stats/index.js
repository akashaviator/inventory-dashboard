import { Stack } from "@mui/material"
import Stat from "./Stat"
import ShoppingCart from "@mui/icons-material/ShoppingCart"
import CurrencyExchange from "@mui/icons-material/CurrencyExchange"
import RemoveShoppingCart from "@mui/icons-material/RemoveShoppingCart"
import Category from "@mui/icons-material/Category"

const Stats = ({ inventory }) => {
  return (
    <Stack direction="row" justifyContent="space-between" mt={2}>
      <Stat
        icon={<ShoppingCart />}
        label="Total Products"
        value={inventory.totalProducts}
      />
      <Stat
        icon={<CurrencyExchange />}
        label="Total Store Value"
        value={inventory.totalValue}
      />
      <Stat
        icon={<RemoveShoppingCart />}
        label="Out Of Stock"
        value={inventory.outOfStock}
      />
      <Stat
        icon={<Category />}
        label="No. Of Categories"
        value={inventory.noOfCategories}
      />
    </Stack>
  )
}
export default Stats

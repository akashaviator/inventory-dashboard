import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import StyledChip from "../StyledChip"
import {
  deleteItem,
  disableItem,
} from "../../features/Dashboard/inventorySlice"
import { useDispatch } from "react-redux"
import Row from "./Row"

const InventoryTable = ({ products, disableActions, openEditModal }) => {
  const dispatch = useDispatch()

  const handleAction = (event, row) => {
    const action = event.target.closest("button")?.getAttribute("data-action")
    if (!action) return
    switch (action) {
      case "edit":
        openEditModal(row)
        break
      case "visibility":
        dispatch(disableItem(row))
        break
      case "delete":
        dispatch(deleteItem(row))
        break
    }
  }

  return (
    <Box sx={{ mt: 2 }}>
      <TableContainer component={Paper} sx={{ mt: 4, borderRadius: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <StyledChip label="Name" />
              </TableCell>
              <TableCell align="center">
                <StyledChip label="Category" />
              </TableCell>
              <TableCell align="center">
                <StyledChip label="Price" />
              </TableCell>
              <TableCell align="center">
                <StyledChip label="Quantity" />
              </TableCell>
              <TableCell align="center">
                <StyledChip label="Value" />
              </TableCell>
              <TableCell align="center">
                <StyledChip label="Action" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <Row
                data={row}
                disableActions={disableActions}
                handleAction={handleAction}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default InventoryTable

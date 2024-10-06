import {
  Box,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import StyledChip from "../StyledChip"
import DeleteIcon from "@mui/icons-material/Delete"
import ModeEditIcon from "@mui/icons-material/ModeEdit"
import VisibilityIcon from "@mui/icons-material/Visibility"
import {
  deleteItem,
  disableItem,
} from "../../features/Dashboard/inventorySlice"
import { useDispatch } from "react-redux"
import { dark } from "@mui/material/styles/createPalette"

const InventoryTable = ({ products, disableActions, openEditModal }) => {
  const dispatch = useDispatch()

  const handleAction = (event, row) => {
    const action = event.target.closest("button")?.getAttribute("data-action")
    if (!action) return
    switch (action) {
      case "edit":
        console.log("edit")
        openEditModal(row)
        break
      case "visibility":
        dispatch(disableItem(row))
        break
      case "delete":
        dispatch(deleteItem(row))
        break
      default:
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
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  bgcolor: row.disabled ? dark.background.default : null,
                }}
                onClick={(event) => handleAction(event, row)}
              >
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="center">{row.category}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">{row.value}</TableCell>
                <TableCell align="center">
                  <Stack direction="row" justifyContent="center">
                    <IconButton
                      data-action="edit"
                      size="small"
                      disabled={disableActions || row.disabled}
                    >
                      <ModeEditIcon
                        fontSize="inherit"
                        sx={{ color: "#377e22" }}
                      />
                    </IconButton>
                    <IconButton
                      data-action="visibility"
                      size="small"
                      disabled={disableActions}
                    >
                      <VisibilityIcon
                        fontSize="inherit"
                        sx={{ color: "#c597d5" }}
                      />
                    </IconButton>
                    <IconButton
                      data-action="delete"
                      size="small"
                      disabled={disableActions}
                    >
                      <DeleteIcon fontSize="inherit" color="error" />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default InventoryTable

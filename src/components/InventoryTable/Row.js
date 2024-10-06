import Delete from "@mui/icons-material/Delete"
import ModeEdit from "@mui/icons-material/ModeEdit"
import Visibility from "@mui/icons-material/Visibility"
import { IconButton, Stack, TableCell, TableRow } from "@mui/material"
import { dark } from "@mui/material/styles/createPalette"

const Row = ({ data, handleAction, disableActions }) => {
  return (
    <TableRow
      key={data.name}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        bgcolor: data.disabled ? dark.background.default : null,
        opacity: data.disabled ? 0.4 : 1,
      }}
      onClick={(event) => handleAction(event, data)}
    >
      <TableCell align="left">{data.name}</TableCell>
      <TableCell align="center">{data.category}</TableCell>
      <TableCell align="center">{data.price}</TableCell>
      <TableCell align="center">{data.quantity}</TableCell>
      <TableCell align="center">{data.value}</TableCell>
      <TableCell align="center">
        <Stack direction="row" justifyContent="center">
          <IconButton
            data-action="edit"
            size="small"
            disabled={disableActions || data.disabled}
          >
            <ModeEdit fontSize="inherit" sx={{ color: "#377e22" }} />
          </IconButton>
          <IconButton
            data-action="visibility"
            size="small"
            disabled={disableActions}
          >
            <Visibility fontSize="inherit" sx={{ color: "#c597d5" }} />
          </IconButton>
          <IconButton
            data-action="delete"
            size="small"
            disabled={disableActions}
          >
            <Delete fontSize="inherit" color="error" />
          </IconButton>
        </Stack>
      </TableCell>
    </TableRow>
  )
}
export default Row

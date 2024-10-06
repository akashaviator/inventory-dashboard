import React from "react"
import { styled } from "@mui/material/styles"
import Chip from "@mui/material/Chip"

const CustomChip = styled(Chip)(({ theme }) => ({
  borderRadius: 10,
  backgroundColor: theme.palette.background.default,
  color: "#cde365",
}))

function StyledChip(props) {
  return <CustomChip {...props} />
}

export default StyledChip

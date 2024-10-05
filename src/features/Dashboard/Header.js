import { Box, Switch, Typography } from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout"
import { useEffect } from "react"

export default function Header({ checked, setIsUserView }) {
  useEffect(() => console.log(checked), [checked])
  return (
    <Box
      sx={{
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "120px",
          justifyContent: "space-between",
          mr: 6,
        }}
      >
        <Typography fontWeight={500} fontSize="small">
          Admin
        </Typography>
        <Switch
          size="small"
          color="info"
          checked={checked}
          onClick={() => setIsUserView(!checked)}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography fontWeight={500} fontSize="small">
          User
        </Typography>
      </Box>
      <LogoutIcon fontSize="medium" />
    </Box>
  )
}

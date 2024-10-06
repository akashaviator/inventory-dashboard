import { Box, Switch, Typography } from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout"

const Header = ({ checked, setIsUserView }) => {
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
export default Header

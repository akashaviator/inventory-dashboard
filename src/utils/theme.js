import { createTheme } from "@mui/material"

const darkTheme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#3f413c",
          border: "1px solid #3f413c",
          paddingLeft: "10px",
          paddingRight: "10px",
          borderRadius: "10px",
          fontSize: "12px",
          "&::before": {
            borderBottom: "none !important",
          },
          "&::after": {
            borderBottom: "none !important",
          },
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#cde365",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f50057",
      contrastText: "#ffffff",
    },
    background: {
      default: "#161719",
      paper: "#212123",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
})
export default darkTheme

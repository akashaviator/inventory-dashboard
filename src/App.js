import "./App.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import Dashboard from "./features/Dashboard"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
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

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Box
            sx={{
              width: "100vw",
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Dashboard />
          </Box>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default App

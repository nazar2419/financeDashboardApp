import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";


function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
      <div className='App'>
        <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%">

          </Box>
        </ThemeProvider>
        </BrowserRouter>
      </div>
  )
}

export default App

import { ThemeProvider } from "@mui/material";
import Router from "routes/Router";
import GlobalStyle from "styles/global";
import theme from "styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

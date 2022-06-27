import { createTheme } from "@mui/material";
import { primaryColor, textColor } from "constants/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: textColor,
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif'
  },
});

export default theme;

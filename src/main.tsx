import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3761a6'
    },
  }
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

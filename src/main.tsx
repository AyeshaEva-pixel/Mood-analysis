import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ConfigProvider } from "antd";
import router from "./routes/routes";

// Styles
import "./styles/scrollbar.css";

const theme = {
  token: {
    colorPrimary: "#4DD0E1",
    // colorPrimaryBg: "#fad5ab",
    // colorPrimaryHover: "#fad5ab",
    colorLink: "#4DD0E1",
    colorPrimaryBgHover: "#fad5ab",
    colorBgTextActive: "#fad5ab",
    colorTextBase: "#333333",
    // tableRowHoverBg: "#2e3192",
    fontFamily: "inherit",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
    <Toaster richColors expand={true} position="top-center" />
  </Provider>
);

import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PayPalScriptProvider
      options={{
        "client-id":
          "AUbnE1X2LE-ac3HNkdwSYFoMItGvpQXERGfGaK3RSEHEGUZKxhKgzbU6Omd97xJ-G1wkbIb-xK2bkS_o",
        currency: "USD",
      }} 
      //note: before deploy move to .env 
    >
      <Provider store={store}>
        <App />
        <ToastContainer position="top-center" autoClose={5000} />
      </Provider>
    </PayPalScriptProvider>
  </BrowserRouter>
);

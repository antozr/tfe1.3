import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorP from "./pages/ErrorP";
import TonAventure from "./pages/TonAventure";
import PlusDInfo from "./pages/PlusDInfo";
import StylePB from "./pages/StylePB";

import HomeP from "./pages/HomeP";
import LayoutTattoo from "./pages/LayoutTattoo";
import StyleLayout from "./routes/StyleLayout";
import LayoutStyle2 from "./pages/LayoutStyle2";
import CrediPage from "./pages/Credits";
import UikitPage from "./pages/Uikit";

const router = createBrowserRouter([
  {
    
    path: "/",
    element: <App />,
    errorElement: <ErrorP />,
    
    children: [
      {
        path: "styles/",
        element: <StyleLayout />,
        children: [
          {
            path: "/styles/oldschool",
            element: <LayoutTattoo USColG={true} styleNum={0} />,
          },
          {
            path: "/styles/",
            element: <StylePB />,
          },
          {
            path: "/styles/japon",
            element: <LayoutStyle2 styleNum={0} boxH4={false} />,
          },
          {
            path: "/styles/nordic",
            element: <LayoutStyle2 styleNum={1}  reverseCol={true}/>,
          },
          {
            path: "/styles/russie",
            element: <LayoutStyle2 styleNum={2} />,
          },
          {
            path: "/styles/celtic",
            element: <LayoutStyle2 styleNum={3} boxH4={true} reverseCol={true} />,
          },
        ],
      },

      {
        path: "plus-d-infos",
        element: <PlusDInfo />,
      },
      {
        path: "mon-aventure",
        element: <TonAventure />,
      },
      {
        path: "credits",
        element: <CrediPage />,
      },
      {
        path: "uikit",
        element: <UikitPage />,
      },
      {
        path: "",
        element: <HomeP />,
      },
    ],
  }

],{
  // basename:'/projets/tfe/'
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
      <RouterProvider router={router} />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

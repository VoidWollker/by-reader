import { useRoutes } from "react-router-dom"
import {Header}  from "./components/Header"
import { Home } from "./pages/Home";

const exerciseRoutes = [
    {
      element: <Header />,
      children: [
        { path: "/", element: <Home /> },
      ],
    },
  ];

export default function Routes(){
    const routes = useRoutes(exerciseRoutes);
  
    return routes;
  };
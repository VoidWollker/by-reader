import { Routes, Route } from "react-router-dom"
import { Header }  from "./components/Header"
import { Home } from "./pages/Home";

export const AppRouter = () => {
  <Routes>
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
};
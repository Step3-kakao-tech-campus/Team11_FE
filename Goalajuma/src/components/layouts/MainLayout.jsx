import { Header } from "./headers/Header";
import { Footer } from "./footers/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
    </div>
  )
}
import { MainHeader } from "./MainHeader"
import { Footer } from "../footers/Footer"
import { Outlet } from "react-router-dom"

export const SubHeader = () => {
  return (
    <div>
      <MainHeader></MainHeader>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

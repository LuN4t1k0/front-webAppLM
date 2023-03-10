import { Outlet } from "react-router-dom";
import Sidebar from "../layout/Sidebar";

export default function PrivateRoutes() {
  return(
    <>
      <Sidebar/>
      <div className="flex flex-1 flex-col lg:pl-64">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </>
  )
}
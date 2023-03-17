import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/Auth";
import Sidebar from "../layout/Sidebar";

export default function PrivateRoutes() {
  const auth = useAuth();

  return(
    <>{auth ? (<>
      <Sidebar/>
      <div className="flex flex-1 flex-col lg:pl-64">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </> ) : <Navigate to="/"/> }</>
    
  )
}
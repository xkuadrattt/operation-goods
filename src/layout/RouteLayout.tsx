import { Outlet } from "react-router-dom";
import { Sidebar, Navbar } from "../components";

const RouteLayout = () => {
  return (
    <main className="flex">
      <Sidebar />
      <section>
       <Navbar /> 
      <Outlet />
      </section>
    </main>
  );
};

export default RouteLayout;

import { UserProvider } from "./UserProvider";
import { Outlet } from "react-router-dom";
import Navbar from './Nabvar';

export const MainApp = () => {
  return (
    <UserProvider>
        <h1>MainApp</h1>
        <Navbar/>
        <hr />
        <Outlet/>
    </UserProvider>
  )
}

import SideBar from "../components/sideBar/SideBar.tsx";
import {Outlet} from "react-router-dom";

const RootRoutes = () => {
    return (
        <>
            <SideBar/>
            <Outlet/>
        </div>
    );
};

export default RootRoutes;

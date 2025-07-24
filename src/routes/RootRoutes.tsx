import SideBar from "../components/sideBar/SideBar.tsx";
import {Outlet} from "react-router-dom";

const RootRoutes = () => {
    return (
        <div>
            <SideBar/>
            <Outlet/>
        </div>
    );
};

export default RootRoutes;
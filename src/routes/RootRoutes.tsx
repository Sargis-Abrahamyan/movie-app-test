import { Outlet } from 'react-router-dom';

import SideBar from '../components/sideBar/SideBar';

const RootRoutes = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};

export default RootRoutes;

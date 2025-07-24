import React from "react";
import clsx from "clsx";

import {Footer, MenuList, SearchBar, Profile} from './'
import useSidebarHoverToggle from "./useSidebarHoverToggle.ts";
import styles from './Sidebar.module.css';

const SideBar = (): React.JSX.Element => {
    const {isOpen, handleOpenSidebar, handleCloseSidebar} = useSidebarHoverToggle()

    return (
        <aside
            className={clsx(styles.sideBar, {[styles.open]: isOpen})}
            onMouseEnter={handleOpenSidebar}
            onMouseLeave={handleCloseSidebar}
            aria-expanded={isOpen}
            aria-label="Index menu"
        >
            <Profile isOpen={isOpen}/>
            <SearchBar isOpen={isOpen}/>
            <MenuList isOpen={isOpen}/>
            {isOpen && <Footer/>}
        </aside>
    );
};

export default SideBar;
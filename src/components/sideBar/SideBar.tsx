import React from "react";
import clsx from "clsx";

import {Footer, MenuList, SearchBar, Profile} from './'
import useSidebarHoverToggle from "./hooks/useSidebarHoverToggle.ts";
import styles from './Sidebar.module.css';

const SideBar = (): React.JSX.Element => {
    const {isOpen, handleOpenSidebar, handleCloseSidebar} = useSidebarHoverToggle()

    return (
        <aside
            className={clsx(styles.sideBar, {[styles.open]: isOpen})}
            aria-expanded={isOpen}
            aria-label="Index menu"
        >
           <div
               onMouseEnter={handleOpenSidebar}
               onMouseLeave={handleCloseSidebar}
               className={styles.sideBar__content}
           >
               <Profile isOpen={isOpen}/>
               <SearchBar isOpen={isOpen}/>
               <MenuList isOpen={isOpen}/>
               {isOpen && <Footer/>}
           </div>
        </aside>
    );
};

export default SideBar;
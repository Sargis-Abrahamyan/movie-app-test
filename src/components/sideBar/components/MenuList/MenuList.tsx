import React from "react";

import {sideBarMenuList} from './data.ts';
import MenuListItem from "./MenuListItem.tsx";
import type {SidebarStateProps} from "../../types/types.ts";
import styles from './MenuList.module.css';

const MenuList = ({isOpen}:SidebarStateProps): React.JSX.Element => {
    return (
        <nav className={styles.sidebar__navigation} role="navigation" aria-label="Index navigation">
            <ul className={styles.sidebar__list}>
                {sideBarMenuList.map((item) => (
                    <MenuListItem key={item.id} {...item} isOpen={isOpen}/>
                ))}
            </ul>
        </nav>
    );
};

export default MenuList;

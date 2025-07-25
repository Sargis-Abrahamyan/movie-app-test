import React from 'react';
import {NavLink} from 'react-router-dom';
import clsx from 'clsx';

import type {SidebarMenuItem, SidebarStateProps} from '../../types/types.ts';
import styles from './MenuListItem.module.css';

interface MenuListItemProps extends SidebarMenuItem, SidebarStateProps {
}

const MenuListItem = ({path, label, icon, isOpen}: Omit<MenuListItemProps, 'id'>): React.JSX.Element => {
    return (
        <li className={styles.sidebar__item}>
            <NavLink
                to={path}
                className={({isActive}) =>
                    clsx(styles.sidebar__link, {
                        [styles.active]: isActive,
                        [styles.inactive]: !isActive,
                        [styles.linkOpen]: isOpen,
                        [styles.linkClosed]: !isOpen,
                    })
                }
                aria-label={label}
            >
                <img src={icon} alt={`${label} icon`} className={styles.sidebar__icon}/>
                <span className={clsx(styles.sidebar__label, {
                    [styles.collapsedLabel]: !isOpen,
                })}
                      aria-hidden={isOpen}
                >
                    {label}
                </span>
            </NavLink>
        </li>
    );
};

export default MenuListItem;

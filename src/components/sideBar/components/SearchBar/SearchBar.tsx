import type { JSX } from 'react';
import clsx from 'clsx';

import searchIcon from '../../../../assets/icons/ICON-Search.png';
import type { SidebarStateProps } from '../../types/types.ts';
import styles from './SearchBar.module.css';

const SearchBar = ({isOpen}: SidebarStateProps):JSX.Element => {
    return (
        <div className={clsx(styles.sidebar__search, { [styles.collapsed]: !isOpen })}>
            <div className={styles['sidebar__search--block']}>
                <img src={searchIcon} alt="search" className={styles['sidebar__search--block--searchImage']} />
            </div>
            <span className={styles['sidebar__search--text']} aria-hidden={!isOpen}>Search</span>
        </div>
    );
};

export default SearchBar;


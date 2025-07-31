import clsx from 'clsx';
import type { JSX } from 'react';

import profileIcon from '../../../../assets/icons/profile.png';
import type { SidebarStateProps } from '../../types/types.ts';
import styles from './Profile.module.css';

const Profile = ({ isOpen }: SidebarStateProps):JSX.Element => {
  return (
    <div
      className={clsx(styles.sidebar__profile, { [styles.closed]: !isOpen })}
      aria-hidden={!isOpen}
    >
      <div className={styles['sidebar__profile--block']}>
        <img src={profileIcon} alt='profile' className={styles['sidebar__profile--avatar']} />
      </div>
      <span className={styles['sidebar__profile--username']}>Daniel</span>
    </div>
  );
};

export default Profile;

import type { JSX } from 'react';

import { footerItem } from './data';
import styles from './Footer.module.css';

const Footer = (): JSX.Element => {
  return (
     <div className={styles.sidebar__footer}>
            {footerItem.map(({label,id}) => (
                <div key={id} className={styles['sidebar__footer--item']}>
                    {label}
                </div>
            ))}
        </div>
  );
};

export default Footer;

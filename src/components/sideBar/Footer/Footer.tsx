import {footerItem} from "./data.ts";
import styles from "./Footer.module.css";

const Footer = () => {
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
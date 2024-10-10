import Link from "next/link";
import styles from './Navbar.module.css';

export default function Navbar()  {
    return(
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navitems}>
                    <Link href="/home">Home</Link>
                </li>

                <li className={styles.navitems}>
                    <Link href="/about">About</Link>
                </li>

                <li className={styles.navitems}>
                    <Link href="/contact">Contact</Link>
                </li>
               
                <li className={styles.navitems}>
                    <Link href="/services">Services</Link>
                </li>
                 
            </ul>

        </nav>
    )
}
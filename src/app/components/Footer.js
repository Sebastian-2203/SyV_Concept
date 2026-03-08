import styles from "./Footer.module.css";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <span className={styles.logo}>S<span>&</span>V</span>
                    <span className={styles.tagline}>Solutions</span>
                </div>
                <p className={styles.copy}>
                    © {year} S&V Solutions · Colombia · Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}

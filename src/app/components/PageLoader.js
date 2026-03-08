"use client";
import { useState, useEffect } from "react";
import styles from "./PageLoader.module.css";

export default function PageLoader() {
    const [loading, setLoading] = useState(true);
    const [hiding, setHiding] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHiding(true);
            setTimeout(() => setLoading(false), 600);
        }, 1800);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className={`${styles.loader} ${hiding ? styles.loaderHiding : ""}`}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    S<span>&</span>V
                </div>
                <div className={styles.tagline}>Solutions</div>
                <div className={styles.bar}>
                    <div className={styles.barFill} />
                </div>
            </div>
        </div>
    );
}

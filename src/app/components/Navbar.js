"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navItems = [
    { id: "inicio", label: "Inicio", icon: "⌂" },
    { id: "servicios", label: "Servicios", icon: "⚡" },
    { id: "portafolio", label: "Portafolio", icon: "✦" },
    { id: "cotizador", label: "Cotizar", icon: "◎" },
    { id: "contacto", label: "Contacto", icon: "✉" },
];

export default function Navbar() {
    const [active, setActive] = useState("inicio");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            const sections = navItems.map((item) => document.getElementById(item.id));
            let current = "inicio";
            sections.forEach((section) => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2) {
                        current = section.id;
                    }
                }
            });
            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setActive(id);
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.elevated : ""}`}>
            <div className={styles.pill}>
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`${styles.navItem} ${active === item.id ? styles.navItemActive : ""}`}
                        onClick={() => scrollTo(item.id)}
                        aria-label={item.label}
                    >
                        <span className={styles.icon}>{item.icon}</span>
                        <span className={styles.label}>{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
}

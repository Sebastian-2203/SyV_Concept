"use client";
import { useState, useEffect } from "react";
import MatrixBackground from "./MatrixBackground";
import styles from "./Hero.module.css";

const words = ["Modernas", "Poderosas", "Escalables", "Innovadoras"];

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setWordIndex((i) => (i + 1) % words.length);
                setVisible(true);
            }, 400);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="inicio" className={styles.hero}>
            <MatrixBackground />
            <div className={styles.overlay} />
            <div className={styles.content}>
                <div className={styles.badge}>
                    <span className={styles.dot} />
                    Disponibles para nuevos proyectos
                </div>
                <h1 className={styles.title}>
                    Soluciones Web
                    <br />
                    <span className={`${styles.word} ${visible ? styles.wordVisible : styles.wordHidden}`}>
                        {words[wordIndex]}
                    </span>
                </h1>
                <p className={styles.subtitle}>
                    Desarrollamos páginas web modernas, sistemas digitales y soluciones tecnológicas
                    para empresas y emprendimientos que quieren crecer.
                </p>
                <div className={styles.actions}>
                    <button className={styles.btnPrimary} onClick={() => scrollTo("cotizador")}>
                        Cotizar proyecto
                        <span className={styles.arrow}>→</span>
                    </button>
                    <button className={styles.btnSecondary} onClick={() => scrollTo("portafolio")}>
                        Ver portafolio
                    </button>
                </div>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statNum}>15+</span>
                        <span className={styles.statLabel}>Proyectos</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.stat}>
                        <span className={styles.statNum}>2</span>
                        <span className={styles.statLabel}>Fundadores</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.stat}>
                        <span className={styles.statNum}>100%</span>
                        <span className={styles.statLabel}>Remotos</span>
                    </div>
                </div>
            </div>
            <div className={styles.scrollHint}>
                <span>Scroll</span>
                <div className={styles.scrollLine} />
            </div>
        </section>
    );
}

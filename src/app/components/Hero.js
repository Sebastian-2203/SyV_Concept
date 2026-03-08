"use client";
import { useState, useEffect } from "react";
import MatrixBackground from "./MatrixBackground";
import useCountUp from "../hooks/useCountUp";
import styles from "./Hero.module.css";

const words = ["Modernas", "Poderosas", "Escalables", "Innovadoras"];

function AnimatedStat({ target, suffix = "", label }) {
    const { count, ref } = useCountUp(target, 1800);
    return (
        <div className={styles.stat} ref={ref}>
            <span className={styles.statNum}>{count}{suffix}</span>
            <span className={styles.statLabel}>{label}</span>
        </div>
    );
}

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
                    Agencia profesional de desarrollo web en Colombia. Creamos páginas modernas, sistemas digitales y soluciones tecnológicas robustas para empresas que buscan liderar el mercado.
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
                    <AnimatedStat target={15} suffix="+" label="Proyectos" />
                    <div className={styles.divider} />
                    <AnimatedStat target={2} suffix="" label="Fundadores" />
                    <div className={styles.divider} />
                    <AnimatedStat target={100} suffix="%" label="Remotos" />
                </div>
            </div>
            <div className={styles.scrollHint}>
                <span>Scroll</span>
                <div className={styles.scrollLine} />
            </div>
        </section>
    );
}

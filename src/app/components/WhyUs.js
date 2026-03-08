"use client";
import useScrollReveal from "../hooks/useScrollReveal";
import styles from "./WhyUs.module.css";

const reasons = [
    {
        icon: "⚡",
        title: "Entrega Rápida",
        desc: "Cumplimos los tiempos acordados. Tu proyecto estará listo cuando lo prometemos, sin excusas.",
        accent: "var(--primary)",
    },
    {
        icon: "✦",
        title: "Diseño Premium",
        desc: "Cada proyecto está diseñado para impresionar desde el primer clic. Nada de plantillas genéricas.",
        accent: "var(--secondary)",
    },
    {
        icon: "◉",
        title: "Código Propio",
        desc: "Desarrollamos todo desde cero. Recibes el código fuente completo, sin dependencias ocultas.",
        accent: "#a855f7",
    },
    {
        icon: "⬡",
        title: "Soporte Post-Lanzamiento",
        desc: "No desaparecemos después de entregar. Estamos disponibles para ajustes y soporte continuo.",
        accent: "var(--success)",
    },
];

export default function WhyUs() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section ref={ref} className={`${styles.section} ${isVisible ? styles.visible : ""}`}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>¿Por qué nosotros?</span>
                    <h2 className={styles.title}>Lo que nos diferencia</h2>
                    <p className={styles.subtitle}>
                        Tu agencia de confianza. Somos desarrolladores apasionados que crean soluciones web personalizadas, tratando cada proyecto como si fuera propio.
                    </p>
                </div>
                <div className={styles.grid}>
                    {reasons.map((reason, i) => (
                        <div
                            key={i}
                            className={styles.card}
                            style={{
                                "--accent": reason.accent,
                                transitionDelay: `${i * 100}ms`,
                            }}
                        >
                            <div className={styles.cardTop}>
                                <span className={styles.icon} style={{ color: reason.accent }}>
                                    {reason.icon}
                                </span>
                                <div className={styles.number}>{String(i + 1).padStart(2, "0")}</div>
                            </div>
                            <h3 className={styles.cardTitle}>{reason.title}</h3>
                            <p className={styles.cardDesc}>{reason.desc}</p>
                            <div className={styles.cardLine} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

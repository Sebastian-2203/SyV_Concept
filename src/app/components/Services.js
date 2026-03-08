"use client";
import useScrollReveal from "../hooks/useScrollReveal";
import styles from "./Services.module.css";

const services = [
    {
        icon: "◈",
        title: "Páginas Web",
        desc: "Diseño y desarrollo de landing pages, portafolios, sitios corporativos y blogs con el mejor rendimiento.",
        tags: ["Next.js", "React", "SEO"],
        color: "var(--primary)",
    },
    {
        icon: "⬡",
        title: "Tiendas Online",
        desc: "E-commerce completo con gestión de productos, pagos en línea y paneles administrativos a medida.",
        tags: ["E-Commerce", "Pasarela de Pago", "Admin Panel"],
        color: "var(--secondary)",
    },
    {
        icon: "◉",
        title: "Sistemas Digitales",
        desc: "Aplicaciones web y sistemas de gestión internos para optimizar los procesos de tu empresa.",
        tags: ["Web App", "API REST", "Base de Datos"],
        color: "#a855f7",
    },
    {
        icon: "⚙",
        title: "Soporte & Mantenimiento",
        desc: "Actualizaciones, corrección de errores, optimización de rendimiento y soporte técnico continuo.",
        tags: ["Soporte", "Updates", "Performance"],
        color: "var(--success)",
    },
];

export default function Services() {
    const { ref, isVisible } = useScrollReveal();
    return (
        <section id="servicios" ref={ref} className={`${styles.section} ${isVisible ? styles.visible : ""}`}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>¿Qué hacemos?</span>
                    <h2 className={styles.title}>Nuestros Servicios</h2>
                    <p className={styles.subtitle}>
                        Como agencia web líder, combinamos diseño moderno con tecnología de punta para crear productos digitales que marcan la diferencia en Colombia.
                    </p>
                </div>
                <div className={styles.grid}>
                    {services.map((service, i) => (
                        <div key={i} className={styles.card} style={{ "--card-accent": service.color }}>
                            <div className={styles.cardIcon} style={{ color: service.color }}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.desc}</p>
                            <div className={styles.tags}>
                                {service.tags.map((tag, j) => (
                                    <span key={j} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            <div className={styles.cardGlow} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

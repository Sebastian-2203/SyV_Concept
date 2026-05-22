"use client";
import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import styles from "./Portfolio.module.css";

const projects = [
    {
        title: "Overflod Design",
        category: "E-commerce & Impresión",
        desc: "Plataforma premium de diseño e impresión publicitaria con catálogo dinámico, carrito de compras interactivo y pasarela de MercadoPago.",
        tech: ["Next.js", "Tailwind CSS", "MercadoPago", "Socket.io"],
        gradient: "linear-gradient(135deg, #00FF00 0%, #00CCFF 30%, #9900CC 70%, #FF00FF 100%)",
        image: "/overflod.png",
        link: "https://overfloddesign.com",
    },
    {
        title: "Agendamiento de Citas",
        category: "Mobile Web App",
        desc: "Sistema completo de agendamiento con calendario interactivo, notificaciones y panel de administración.",
        tech: ["Next.js", "Firebase", "Google Calendar"],
        gradient: "linear-gradient(135deg, #0052FF 0%, #00D4FF 100%)",
        image: "/agendamiento.png",
        link: "https://agendamiento-citas-next.vercel.app",
    },
    {
        title: "E-commerce Boutique",
        category: "Tienda Online",
        desc: "Tienda online de moda con carrito inteligente, pasarela de pago y gestión de inventario.",
        tech: ["React", "Stripe", "Node.js"],
        gradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
    },
    {
        title: "Dashboard Analítico",
        category: "Sistema",
        desc: "Panel de control con métricas en tiempo real, reportes exportables y visualización de datos.",
        tech: ["React", "Chart.js", "REST API"],
        gradient: "linear-gradient(135deg, #10b981 0%, #00D4FF 100%)",
    },
];

export default function Portfolio() {
    const { ref, isVisible } = useScrollReveal();
    return (
        <section id="portafolio" ref={ref} className={`${styles.section} ${isVisible ? styles.visible : ""}`}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Trabajo reciente</span>
                    <h2 className={styles.title}>Portafolio</h2>
                    <p className={styles.subtitle}>
                        Algunos de los proyectos que hemos desarrollado recientemente.
                    </p>
                </div>
                <div className={styles.grid}>
                    {projects.map((project, i) => {
                        const CardElement = project.link ? "a" : "div";
                        const extraProps = project.link ? {
                            href: project.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: `${styles.card} ${styles.cardLink}`
                        } : {
                            className: styles.card
                        };
                        return (
                            <CardElement key={i} {...extraProps}>
                                <div className={styles.cardPreview} style={{ background: project.gradient }}>
                                    {project.image ? (
                                        <Image src={project.image} alt={project.title} fill className={styles.previewImage} sizes="(max-width: 768px) 100vw, 33vw" />
                                    ) : (
                                        <div className={styles.previewPattern}>
                                            {Array.from({ length: 20 }).map((_, j) => (
                                                <span key={j} className={styles.previewDot} />
                                            ))}
                                        </div>
                                    )}
                                    <span className={styles.category}>{project.category}</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                    <p className={styles.cardDesc}>{project.desc}</p>
                                    <div className={styles.tech}>
                                        {project.tech.map((t, j) => (
                                            <span key={j} className={styles.techTag}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </CardElement>
                        );
                    })}
                </div>
                <div className={styles.cta}>
                    <p>¿Tienes un proyecto en mente?</p>
                    <button className={styles.ctaBtn} onClick={() => document.getElementById("cotizador")?.scrollIntoView({ behavior: "smooth" })}>
                        Hablemos →
                    </button>
                </div>
            </div>
        </section>
    );
}

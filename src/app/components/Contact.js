"use client";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section id="contacto" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Estamos aquí</span>
                    <h2 className={styles.title}>Contáctanos</h2>
                    <p className={styles.subtitle}>
                        ¿Tienes preguntas? Escríbenos y te respondemos en menos de 24 horas.
                    </p>
                </div>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <div className={styles.infoCard}>
                            <span className={styles.infoIcon}>✉</span>
                            <div>
                                <strong>Email</strong>
                                <a href="mailto:contacto@syvsolutions.com">contacto@syvsolutions.com</a>
                            </div>
                        </div>
                        <div className={styles.infoCard}>
                            <span className={styles.infoIcon}>📍</span>
                            <div>
                                <strong>Ubicación</strong>
                                <span>Colombia · Trabajo 100% Remoto</span>
                            </div>
                        </div>
                        <div className={styles.infoCard}>
                            <span className={styles.infoIcon}>⏰</span>
                            <div>
                                <strong>Disponibilidad</strong>
                                <span>Lun – Vie, 9:00 AM – 6:00 PM (COT)</span>
                            </div>
                        </div>
                        <div className={styles.infoCard}>
                            <span className={styles.infoIcon}>⚡</span>
                            <div>
                                <strong>Respuesta</strong>
                                <span>Menos de 24 horas hábiles</span>
                            </div>
                        </div>
                    </div>
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>Nombre</label>
                                <input type="text" placeholder="Tu nombre" />
                            </div>
                            <div className={styles.field}>
                                <label>Email</label>
                                <input type="email" placeholder="tu@email.com" />
                            </div>
                        </div>
                        <div className={styles.field}>
                            <label>Asunto</label>
                            <input type="text" placeholder="¿En qué podemos ayudarte?" />
                        </div>
                        <div className={styles.field}>
                            <label>Mensaje</label>
                            <textarea rows={5} placeholder="Cuéntanos sobre tu proyecto o consulta..." />
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Enviar mensaje →
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

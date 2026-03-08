"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import useScrollReveal from "../hooks/useScrollReveal";
import styles from "./Contact.module.css";

export default function Contact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const { ref, isVisible } = useScrollReveal();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            formRef.current.reset();
        } catch {
            setStatus("error");
        }
    };

    return (
        <section
            id="contacto"
            ref={ref}
            className={`${styles.section} ${isVisible ? styles.visible : ""}`}
        >
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
                        <div className={styles.infoCard}>
                            <span className={styles.infoIcon}>📅</span>
                            <div>
                                <strong>Agendar Reunión</strong>
                                <Link href="/scheduling" className={styles.schedulingLink}>Reserva una llamada de 15 min</Link>
                            </div>
                        </div>
                    </div>
                    <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>Nombre</label>
                                <input type="text" name="from_name" placeholder="Tu nombre" required />
                            </div>
                            <div className={styles.field}>
                                <label>Email</label>
                                <input type="email" name="from_email" placeholder="tu@email.com" required />
                            </div>
                        </div>
                        <div className={styles.field}>
                            <label>Asunto</label>
                            <input type="text" name="subject" placeholder="¿En qué podemos ayudarte?" required />
                        </div>
                        <div className={styles.field}>
                            <label>Mensaje</label>
                            <textarea name="message" rows={5} placeholder="Cuéntanos sobre tu proyecto o consulta..." required />
                        </div>
                        {status === "success" && (
                            <div className={styles.successMsg}>✓ ¡Mensaje enviado con éxito! Te respondemos pronto.</div>
                        )}
                        {status === "error" && (
                            <div className={styles.errorMsg}>✕ Ocurrió un error. Intenta de nuevo o escríbenos directamente.</div>
                        )}
                        <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
                            {status === "sending" ? "Enviando..." : "Enviar mensaje →"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

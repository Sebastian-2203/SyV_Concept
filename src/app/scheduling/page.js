"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./scheduling.module.css";

const days = ["Lun", "Mar", "Mié", "Jue", "Vie"];
const hours = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

export default function SchedulingPage() {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);
    const [step, setStep] = useState(1); // 1: selection, 2: confirmation

    const handleConfirm = () => {
        if (selectedDay && selectedHour) {
            setStep(2);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <Link href="/" className={styles.backBtn}>
                        ← Volver al Inicio
                    </Link>
                    <h1 className={styles.title}>Agendar una Reunión</h1>
                    <p className={styles.subtitle}>
                        Reserva una consultoría técnica gratuita de 15 minutos para discutir tu proyecto.
                    </p>
                </header>

                {step === 1 ? (
                    <main className={styles.main}>
                        <div className={styles.card}>
                            <div className={styles.section}>
                                <h3 className={styles.sectionTitle}>1. Selecciona un día</h3>
                                <div className={styles.grid}>
                                    {days.map((day) => (
                                        <button
                                            key={day}
                                            className={`${styles.item} ${selectedDay === day ? styles.active : ""}`}
                                            onClick={() => setSelectedDay(day)}
                                        >
                                            {day}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.section}>
                                <h3 className={styles.sectionTitle}>2. Selecciona una hora</h3>
                                <div className={styles.grid}>
                                    {hours.map((hour) => (
                                        <button
                                            key={hour}
                                            className={`${styles.item} ${selectedHour === hour ? styles.active : ""}`}
                                            onClick={() => setSelectedHour(hour)}
                                        >
                                            {hour}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                className={styles.confirmBtn}
                                disabled={!selectedDay || !selectedHour}
                                onClick={handleConfirm}
                            >
                                Confirmar Agendamiento
                            </button>
                        </div>
                    </main>
                ) : (
                    <main className={styles.successMain}>
                        <div className={styles.successCard}>
                            <span className={styles.successIcon}>🚀</span>
                            <h2 className={styles.successTitle}>¡Solicitud enviada!</h2>
                            <p className={styles.successText}>
                                Hemos recibido tu interés para el {selectedDay} a las {selectedHour}.
                                Te contactaremos pronto para confirmar el enlace de la reunión.
                            </p>
                            <Link href="/" className={styles.homeLink}>
                                Regresar al Inicio
                            </Link>
                        </div>
                    </main>
                )}

                <footer className={styles.footer}>
                    <p>© 2024 S&V Solutions · Colombia</p>
                </footer>
            </div>
        </div>
    );
}

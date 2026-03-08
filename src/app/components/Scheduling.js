"use client";
import { useState } from "react";
import styles from "./Scheduling.module.css";

const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const DAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const TIME_SLOTS = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
}

export default function Scheduling() {
    const today = new Date();
    const [viewYear, setViewYear] = useState(today.getFullYear());
    const [viewMonth, setViewMonth] = useState(today.getMonth());
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [form, setForm] = useState({ name: "", email: "" });
    const [booked, setBooked] = useState(false);

    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

    const prevMonth = () => {
        if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
        else setViewMonth(m => m - 1);
        setSelectedDay(null); setSelectedTime(null);
    };
    const nextMonth = () => {
        if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
        else setViewMonth(m => m + 1);
        setSelectedDay(null); setSelectedTime(null);
    };

    const isPast = (day) => {
        const d = new Date(viewYear, viewMonth, day);
        return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    };

    const handleBook = (e) => {
        e.preventDefault();
        setBooked(true);
    };

    if (booked) {
        return (
            <section id="agenda" className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.success}>
                        <div className={styles.successIcon}>📅</div>
                        <h3>¡Reunión agendada!</h3>
                        <p>
                            {`${form.name}, recibirás una confirmación en ${form.email}. `}
                            Te esperamos el <strong>{selectedDay} de {MONTHS[viewMonth]}</strong> a las <strong>{selectedTime}</strong>.
                        </p>
                        <button className={styles.resetBtn} onClick={() => { setBooked(false); setSelectedDay(null); setSelectedTime(null); setForm({ name: "", email: "" }); }}>
                            Agendar otra reunión
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="agenda" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Sin costo</span>
                    <h2 className={styles.title}>Agenda una reunión</h2>
                    <p className={styles.subtitle}>
                        Conversemos sobre tu proyecto. 30 minutos, completamente gratis.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.calendarSide}>
                        <div className={styles.calHeader}>
                            <button className={styles.navBtn} onClick={prevMonth}>‹</button>
                            <span className={styles.monthLabel}>{MONTHS[viewMonth]} {viewYear}</span>
                            <button className={styles.navBtn} onClick={nextMonth}>›</button>
                        </div>
                        <div className={styles.calGrid}>
                            {DAYS.map((d) => (
                                <div key={d} className={styles.calDayLabel}>{d}</div>
                            ))}
                            {Array.from({ length: firstDay }).map((_, i) => (
                                <div key={`empty-${i}`} />
                            ))}
                            {Array.from({ length: daysInMonth }).map((_, i) => {
                                const day = i + 1;
                                const past = isPast(day);
                                const isSelected = selectedDay === day;
                                return (
                                    <button
                                        key={day}
                                        disabled={past}
                                        className={`${styles.calDay} ${past ? styles.calDayPast : ""} ${isSelected ? styles.calDaySelected : ""}`}
                                        onClick={() => { setSelectedDay(day); setSelectedTime(null); }}
                                    >
                                        {day}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        {selectedDay ? (
                            <>
                                <h3 className={styles.rightTitle}>
                                    {selectedDay} de {MONTHS[viewMonth]}
                                </h3>
                                <p className={styles.rightSubtitle}>Elige un horario disponible:</p>
                                <div className={styles.timeGrid}>
                                    {TIME_SLOTS.map((t) => (
                                        <button
                                            key={t}
                                            className={`${styles.timeSlot} ${selectedTime === t ? styles.timeSlotActive : ""}`}
                                            onClick={() => setSelectedTime(t)}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                                {selectedTime && (
                                    <form className={styles.bookForm} onSubmit={handleBook}>
                                        <input
                                            type="text"
                                            placeholder="Tu nombre"
                                            required
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        />
                                        <input
                                            type="email"
                                            placeholder="tu@email.com"
                                            required
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        />
                                        <button type="submit" className={styles.bookBtn}>
                                            Confirmar reunión
                                        </button>
                                    </form>
                                )}
                            </>
                        ) : (
                            <div className={styles.placeholder}>
                                <span className={styles.placeholderIcon}>📅</span>
                                <p>Selecciona un día en el calendario para ver los horarios disponibles.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

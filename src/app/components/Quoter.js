"use client";
import { useState } from "react";
import styles from "./Quoter.module.css";

const serviceOptions = [
    { id: "landing", label: "Landing Page", price: 500 },
    { id: "ecommerce", label: "Tienda Online", price: 1200 },
    { id: "webapp", label: "Web App / Sistema", price: 2000 },
    { id: "corporate", label: "Sitio Corporativo", price: 800 },
];

const extras = [
    { id: "seo", label: "Optimización SEO", price: 150 },
    { id: "email", label: "Email Marketing", price: 100 },
    { id: "admin", label: "Panel Administrativo", price: 400 },
    { id: "support", label: "Soporte 3 meses", price: 200 },
    { id: "hosting", label: "Configuración Hosting", price: 80 },
];

export default function Quoter() {
    const [selectedService, setSelectedService] = useState(null);
    const [selectedExtras, setSelectedExtras] = useState([]);
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const toggleExtra = (id) => {
        setSelectedExtras((prev) =>
            prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
        );
    };

    const basePrice = serviceOptions.find((s) => s.id === selectedService)?.price ?? 0;
    const extrasPrice = extras.filter((e) => selectedExtras.includes(e.id)).reduce((acc, e) => acc + e.price, 0);
    const total = basePrice + extrasPrice;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section id="cotizador" className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.success}>
                        <div className={styles.successIcon}>✓</div>
                        <h3>¡Cotización enviada!</h3>
                        <p>Nos pondremos en contacto contigo pronto. Presupuesto estimado: <strong>${total.toLocaleString()} USD</strong></p>
                        <button className={styles.resetBtn} onClick={() => { setSubmitted(false); setStep(1); setSelectedService(null); setSelectedExtras([]); }}>
                            Nueva cotización
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="cotizador" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Sin compromiso</span>
                    <h2 className={styles.title}>Cotizador</h2>
                    <p className={styles.subtitle}>Obtén un estimado de tu proyecto en segundos.</p>
                </div>

                <div className={styles.quoterCard}>
                    {/* Step indicator */}
                    <div className={styles.steps}>
                        {[1, 2, 3].map((s) => (
                            <div key={s} className={`${styles.step} ${step >= s ? styles.stepActive : ""}`}>
                                <div className={styles.stepDot}>{step > s ? "✓" : s}</div>
                                <span>{["Servicio", "Extras", "Datos"][s - 1]}</span>
                            </div>
                        ))}
                    </div>

                    {/* Step 1: Choose service */}
                    {step === 1 && (
                        <div className={styles.stepContent}>
                            <h3 className={styles.stepTitle}>¿Qué necesitas desarrollar?</h3>
                            <div className={styles.serviceGrid}>
                                {serviceOptions.map((s) => (
                                    <button
                                        key={s.id}
                                        className={`${styles.serviceCard} ${selectedService === s.id ? styles.serviceCardActive : ""}`}
                                        onClick={() => setSelectedService(s.id)}
                                    >
                                        <span className={styles.serviceLabel}>{s.label}</span>
                                        <span className={styles.servicePrice}>Desde ${s.price} USD</span>
                                    </button>
                                ))}
                            </div>
                            <button
                                className={styles.nextBtn}
                                disabled={!selectedService}
                                onClick={() => setStep(2)}
                            >
                                Siguiente →
                            </button>
                        </div>
                    )}

                    {/* Step 2: Extras */}
                    {step === 2 && (
                        <div className={styles.stepContent}>
                            <h3 className={styles.stepTitle}>¿Necesitas algo adicional?</h3>
                            <div className={styles.extrasList}>
                                {extras.map((e) => (
                                    <button
                                        key={e.id}
                                        className={`${styles.extraItem} ${selectedExtras.includes(e.id) ? styles.extraItemActive : ""}`}
                                        onClick={() => toggleExtra(e.id)}
                                    >
                                        <span className={styles.extraCheck}>{selectedExtras.includes(e.id) ? "✓" : "+"}</span>
                                        <span className={styles.extraLabel}>{e.label}</span>
                                        <span className={styles.extraPrice}>+ ${e.price}</span>
                                    </button>
                                ))}
                            </div>
                            <div className={styles.pricePreview}>
                                Estimado actual: <strong>${total.toLocaleString()} USD</strong>
                            </div>
                            <div className={styles.stepNav}>
                                <button className={styles.backBtn} onClick={() => setStep(1)}>← Atrás</button>
                                <button className={styles.nextBtn} onClick={() => setStep(3)}>Siguiente →</button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Contact form */}
                    {step === 3 && (
                        <div className={styles.stepContent}>
                            <h3 className={styles.stepTitle}>Cuéntanos de ti</h3>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.field}>
                                    <label>Nombre</label>
                                    <input
                                        type="text"
                                        placeholder="Tu nombre completo"
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label>Correo electrónico</label>
                                    <input
                                        type="email"
                                        placeholder="tu@email.com"
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label>Cuéntanos sobre tu proyecto</label>
                                    <textarea
                                        placeholder="Describe brevemente tu idea..."
                                        rows={4}
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    />
                                </div>
                                <div className={styles.total}>
                                    Total estimado: <strong>${total.toLocaleString()} USD</strong>
                                </div>
                                <div className={styles.stepNav}>
                                    <button type="button" className={styles.backBtn} onClick={() => setStep(2)}>← Atrás</button>
                                    <button type="submit" className={styles.submitBtn}>Enviar cotización</button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

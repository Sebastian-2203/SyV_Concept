"use client";
import { useEffect, useRef } from "react";
import styles from "./MatrixBackground.module.css";

export default function MatrixBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const chars = "01";
        const fontSize = 14;
        let cols = Math.floor(canvas.width / fontSize);
        let drops = Array(Math.ceil(cols)).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(13, 13, 18, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            cols = Math.floor(canvas.width / fontSize);
            while (drops.length < cols) drops.push(Math.floor(Math.random() * canvas.height / fontSize));

            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const progress = drops[i] / (canvas.height / fontSize);
                const alpha = Math.max(0.05, 1 - progress);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.7})`;
                ctx.fillText(char, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);
        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}

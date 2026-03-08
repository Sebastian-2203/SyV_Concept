import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "S&V Solutions | Agencia de Desarrollo Web y Soluciones Tecnológicas",
  description: "S&V Solutions desarrolla páginas web modernas, sistemas digitales y soluciones tecnológicas para empresas y emprendimientos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}

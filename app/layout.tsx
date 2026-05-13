import "./globals.css";
import { Orbitron, JetBrains_Mono } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-orbitron",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Hassan Abdallah Ghareb | Infrastructure Control Panel",
  description: "Senior System Administrator & IT Infrastructure Specialist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${jetbrains.variable} bg-[#030811] text-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}
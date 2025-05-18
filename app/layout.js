import { Geist, Geist_Mono,Urbanist,Noto_Sans_Thai} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const urban = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const noto = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Natpimon's portfolio",
  description: "Natpimon's portfolio",
  icons: {
    icon: "favicon.png", // หรือใส่ path อื่น เช่น "/icons/my-icon.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${urban.variable} ${noto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DR AK Dental & Aesthetic Clinic | Gulistan-e-Johar, Karachi",
  description: "Your perfect smile is just a visit away. Professional teeth cleaning, root canals, implants, whitening, veneers, and more. Book your appointment today!",
  keywords: "dental clinic karachi, dentist gulistan-e-johar, teeth whitening karachi, dental implants karachi, braces karachi",
  openGraph: {
    title: "DR AK Dental & Aesthetic Clinic",
    description: "Premium dental care in Karachi — Your perfect smile is just a visit away.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body 
        className="antialiased" 
        style={{ fontFamily: "'Manrope', sans-serif" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

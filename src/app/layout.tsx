import type { Metadata, Viewport } from "next";
import { Manrope, Work_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prsilva.pt"),
  title: {
    default: "P.R. Silva — Pinturas e Remodelações com Acabamento Profissional",
    template: "%s | P.R. Silva",
  },
  description:
    "Pinturas interiores, exteriores e remodelações em Portugal. Transformamos casas, apartamentos e espaços comerciais com qualidade, organização e atenção ao detalhe. Peça já o seu orçamento.",
  keywords: [
    "pinturas Portugal",
    "remodelações",
    "pintura interior",
    "pintura exterior",
    "estuque",
    "acabamentos",
    "P.R. Silva",
    "renovação de apartamentos",
    "pintor profissional",
  ],
  authors: [{ name: "P.R. Silva" }],
  creator: "P.R. Silva — Pinturas e Remodelações",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://prsilva.pt",
    siteName: "P.R. Silva — Pinturas e Remodelações",
    title: "P.R. Silva — Pinturas e Remodelações com Acabamento Profissional",
    description:
      "Transformamos casas, apartamentos e espaços comerciais com qualidade, organização e atenção ao detalhe.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "P.R. Silva — Pinturas e Remodelações",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "P.R. Silva — Pinturas e Remodelações",
    description:
      "Transformamos casas, apartamentos e espaços comerciais com qualidade, organização e atenção ao detalhe.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#001b3d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${manrope.variable} ${workSans.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}

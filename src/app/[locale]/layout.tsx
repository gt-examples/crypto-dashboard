import type { Metadata } from 'next';
import { GTProvider } from 'gt-next';
import { getLocale } from 'gt-next/server';
import '../globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const titles: Record<string, string> = {
    en: 'Crypto Dashboard — Portfolio & Market Overview',
    es: 'Panel de Criptomonedas — Portafolio y Mercado',
    ja: '暗号資産ダッシュボード — ポートフォリオと市場概要',
  };
  const descriptions: Record<string, string> = {
    en: 'Track your cryptocurrency portfolio, market prices, and recent transactions. Built with Next.js and General Translation.',
    es: 'Rastrea tu portafolio de criptomonedas, precios de mercado y transacciones recientes.',
    ja: '暗号資産ポートフォリオ、市場価格、最近の取引を追跡。',
  };
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      url: 'https://crypto-dashboard.generaltranslation.dev',
      siteName: 'Crypto Dashboard',
      type: 'website',
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased">
        <GTProvider locale={locale}>
          {children}
        </GTProvider>
      </body>
    </html>
  );
}

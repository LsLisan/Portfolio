import './globals.css';

export const metadata = {
  title: 'MD. Lisan Islam | Flutter Developer & AI/ML Engineer',
  description: 'Portfolio of MD. Lisan Islam, a Flutter developer and AI/ML engineer from Bangladesh.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
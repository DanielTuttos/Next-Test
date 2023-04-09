import Navigation from '@/components/Navigation';
import './globals.css';

export const metadata = {
  title: 'App firts',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

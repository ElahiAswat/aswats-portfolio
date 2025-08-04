import './globals.css';

export const metadata = {
  title: 'Aswat Portfolio',
  description: 'Showcase of software and hardware projects by Aswat',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

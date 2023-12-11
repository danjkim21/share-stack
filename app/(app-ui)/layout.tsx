import Nav from '@/components/nav';
import '../styles/globals.css';
import CommandMenu from '@/components/command-menu';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'shareStack',
  description: 'A digital content sharing web application.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-full">
          <Nav />
          {children}
        </div>
        <CommandMenu />
      </body>
    </html>
  );
}

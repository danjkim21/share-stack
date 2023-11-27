import HeaderStacked from '@/components/header-stacked';
import Nav from '@/components/nav';
import '../styles/globals.css';

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
    <>
      <div className="min-h-full">
        <Nav />
        <HeaderStacked title="Dashboard" />
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}

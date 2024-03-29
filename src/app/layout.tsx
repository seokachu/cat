import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Nav from '../components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daily과제',
  description: '라우팅과 렌더링의 핵심 개념을 이해할 수 있는 예제 작성',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <h1 className="text-center text-fuchsia-500 font-bold text-2xl py-10">
          <Link href="/">렌더링 패턴 4가지 페이지</Link>
        </h1>
        <Nav />
        {children}
      </body>
    </html>
  );
}

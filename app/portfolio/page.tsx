'use client';
import dynamic from 'next/dynamic';

export default function Page() {
  const WrapperWithNoSSR = dynamic(
    () => import('@/components/layout/wrapper'),
    { ssr: false }
  );

  const PortfolioWithNoSSR = dynamic(
    () => import('@/components/pages/portfolio'),
    {
      ssr: false,
    }
  );

  return (
    <WrapperWithNoSSR>
      <PortfolioWithNoSSR />
    </WrapperWithNoSSR>
  );
}

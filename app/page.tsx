'use client';
import dynamic from 'next/dynamic';

export default function Page() {
  const WrapperWithNoSSR = dynamic(
    () => import('./components/layout/wrapper'),
    { ssr: false }
  );

  const HomeWithNoSSR = dynamic(() => import('./components/pages/home'), {
    ssr: false,
  });

  return (
    <WrapperWithNoSSR>
      <HomeWithNoSSR />
    </WrapperWithNoSSR>
  );
}

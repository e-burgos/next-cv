'use client';
import dynamic from 'next/dynamic';

export default function Page() {
  const WrapperWithNoSSR = dynamic(
    () => import('../components/layout/wrapper'),
    { ssr: false }
  );

  const AboutMeWithNoSSR = dynamic(
    () => import('../components/pages/about-me'),
    {
      ssr: false,
    }
  );

  return (
    <WrapperWithNoSSR>
      <AboutMeWithNoSSR />
    </WrapperWithNoSSR>
  );
}

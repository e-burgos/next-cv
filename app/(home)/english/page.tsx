'use client';
import { _storage } from '@/utils/localStorage';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

export default function Page() {
  const WrapperWithNoSSR = dynamic(
    () => import('@/components/layout/wrapper'),
    { ssr: false }
  );

  const HomeWithNoSSR = dynamic(() => import('@/components/pages/home'), {
    ssr: false,
  });

  useEffect(() => {
    _storage.set('current-lang', 'en');
  }, []);

  return (
    <WrapperWithNoSSR>
      <HomeWithNoSSR />
    </WrapperWithNoSSR>
  );
}

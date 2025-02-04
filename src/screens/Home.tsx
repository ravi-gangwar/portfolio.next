import ButtonSection from '@/components/ButtonSection';
import Profile from '@/components/Profile';
import Tabs from '@/components/Tabs';
import SocialsSection from '@/sections/Socials';
import React, { Suspense } from 'react';

const HomeScreen = () => {
  return (
    <div className="min-h-screen">
        <Profile/>
        <ButtonSection/>
        <Suspense>
          <Tabs/>
        </Suspense>
        <SocialsSection/>
    </div>
  );
};

export default HomeScreen;

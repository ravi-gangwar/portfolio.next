import Profile from '@/components/Profile';
import Tabs from '@/components/Tabs';
import React from 'react';

const HomeScreen = () => {
  return (
    <div className="min-h-screen">
        <Profile/>
        <Tabs/>
    </div>
  );
};

export default HomeScreen;

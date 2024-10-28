"use client";
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import { useRouter } from 'next/navigation';
import React from "react";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className='relative z-10'>
        <Logo />
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm relative z-10 text-justify">
        Welcome to Coders Collective, London&apos;s inclusive tech learning community. We bring together aspiring developers and AI enthusiasts through regular meetups, peer mentorship, and collaborative learning sessions. Whether you&apos;re a complete beginner or looking to expand your skills, join our community and start your coding journey together.
        </p>
        <Button className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-blue-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700" onClick={()=>router.push('signup')}>Join now</Button>
      </div>
      <BackgroundBeams />
    </div>
  );
}

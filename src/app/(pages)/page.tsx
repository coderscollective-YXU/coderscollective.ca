import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { getHomepageContent } from "@/sanity/queries/homepage";
import React from "react";
import Main from "../components/Main";
import Link from "next/link";
import Hero from "../components/Homepage/Hero";
import About from "../components/Homepage/About";
import Programs from "../components/Homepage/Programs";
import FeaturedEvents from "../components/Homepage/FeaturedEvents";
import GetInvolved from "../components/Homepage/GetInvolved";

export default async function Home() {
  const homepageContent = await getHomepageContent();
  return (
    <Main>
      {!homepageContent ? (
        <>
          <div className='relative z-10'>
            <Logo />
          </div>
          <div className='max-w-2xl mx-auto p-4'>
            <h1 className='relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold'>
              Join the waitlist
            </h1>
            <p></p>
            <p className='text-neutral-500 max-w-lg mx-auto my-2 text-sm relative z-10 text-justify'>
              Welcome to Coders Collective, London&apos;s inclusive tech
              learning community. We bring together aspiring developers and AI
              enthusiasts through regular meetups, peer mentorship, and
              collaborative learning sessions. Whether you&apos;re a complete
              beginner or looking to expand your skills, join our community and
              start your coding journey together.
            </p>
            <Link href={"/signup"}>
              <Button className='rounded-lg border border-neutral-800 focus:ring-2 focus:ring-blue-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700'>
                Join now
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <div className='relative z-10 flex flex-col'>
          {homepageContent.hero && <Hero homepageContent={homepageContent} />}
          {homepageContent.events && (
            <FeaturedEvents homepageContent={homepageContent} />
          )}
          {/* {homepageContent.mission && (
            <Mission homepageContent={homepageContent} />
          )} */}

          {homepageContent.about && <About homepageContent={homepageContent} />}
          {homepageContent.ourPrograms && (
            <Programs homepageContent={homepageContent} />
          )}

          {homepageContent.getInvolved && (
            <GetInvolved homepageContent={homepageContent} />
          )}
        </div>
      )}
    </Main>
  );
}

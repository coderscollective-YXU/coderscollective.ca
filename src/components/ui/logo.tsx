import MagicIcon from '@/app/signup/magic-icon';
import React from "react";

const Logo = () => {
  return (
    <div className='text-xl text-neutral-50 flex mb-[5rem] items-center'>
      <div className='m-2'>
        <MagicIcon variant='dark' />
      </div>
      <div>
        <div>Coders</div>
        <div className='mt-[-5px]'>Collective</div>
      </div>
    </div>
  );
};

export default Logo;

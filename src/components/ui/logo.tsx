import MagicIcon from '@/app/(pages)/signup/magic-icon';
import React from "react";

const Logo = () => {
  return (
    <div className='text-xl text-neutral-50 flex gap-2 items-center'>
      <MagicIcon variant='dark' />
      <div className=''>
        <div>Coders</div>
        <div>Collective</div>
      </div>
    </div>
  );
};

export default Logo;

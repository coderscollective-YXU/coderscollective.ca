import MagicIcon from '@/app/(pages)/signup/magic-icon';
import React from "react";

const Logo = () => {
  return (
    <div className='text-xl text-neutral-50 flex items-center'>
      <div className='m-2'>
        <MagicIcon variant='dark' />
      </div>
      <div>
        <div>Coders</div>
        <div className=''>Collective</div>
      </div>
    </div>
  );
};

export default Logo;

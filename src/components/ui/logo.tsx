import MagicIcon from '@/app/(pages)/signup/magic-icon';
import Link from 'next/link';
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className='text-xl text-neutral-50 flex gap-2 items-center'>
      <MagicIcon variant='dark' />
      <div className=''>
        <div>Coders</div>
        <div style={{ marginTop: '-10px' }}>Collective</div>
      </div>
    </Link>
  );
};

export default Logo;

import React from 'react';
import Image from 'next/image';
import { Accordion } from './Accordion';
import phantom from '@/../public/institutional/phantom.svg';
import backpack from '@/../public/institutional/backpack.svg';
import solflare from '@/../public/institutional/solflare.svg';

const wallets = [
  {
    icon: phantom,
    name: 'Phantom'
  },
  {
    icon: backpack,
    name: 'Backpack'
  },
  {
    icon: solflare,
    name: 'Solflare'
  },
]

export default function ConnectWallet() {
  return (
    <div className='h-72'>
      <Accordion title="Connect Wallet">
        <div className='flex justify-center border-t border-dashed flex-col items-center'>
          {wallets.map((item) => (
            <button key={item.name}
              className='bg-[#5C4539] border mt-3 border-silver hover:bg-yellow-900 hover:scale-95 transition-all tracking-wider w-full flex p-2 rounded-lg gap-4 items-center'
            >
              <Image className='w-8 h-8' width={32} height={32} src={item.icon} alt={item.name} />
              {item.name}
            </button>
          ))}
        </div>
      </Accordion>
    </div>
  );
};

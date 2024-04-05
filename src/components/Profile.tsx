"use client";
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import { UserIcon } from '@heroicons/react/16/solid';
import profile from '@/../public/components/swordsmanprnt.png';
import shield from '@/../public/components/faction-icon.svg';

export function Profile() {

  return (
    <>
      <div className='flex items-center'>
        <div className='rounded-full border-silver z-0 border-2 -mr-5'>
          <Image src={profile} className='border-4 -z-[2] rounded-full border-main' alt='profile' />
        </div>
        <div className='flex items-start flex-col border-2 bg-main px-8 py-2 rounded-r-lg border-silver'>
          <p className='flex items-center gap-0.5'><UserIcon width={16} height={16} /> Kaleve</p>
          <p className='flex items-center gap-0.5'><Image src={shield} width={10} height={10} alt='faction icon' />Silver flame</p>
        </div>
      </div>
      <div className='flex flex-col border-2 bg-main px-8 py-2 rounded-r-lg border-silver'>
        <p>Kalev</p>
        <p>Silver flame</p>
      </div>
    </>
  );
}

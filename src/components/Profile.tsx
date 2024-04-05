"use client";
import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';
import profile from '@/../public/components/swordsmanprnt.png';

export function Profile() {

  return (
    <div className='flex items-center'>
      <div className='rounded-full border-silver border-2 z-10 -mr-5'>
        <Image src={profile} className='border-4 rounded-full border-main' alt='profile' />
      </div>
      <div className='flex flex-col border-2 bg-main px-8 py-2 rounded-r-lg border-silver'>
        <p>Kalev</p>
        <p>Silver flame</p>
      </div>
    </div>
  );
}

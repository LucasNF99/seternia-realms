"use client";
import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';
import profile from '@/../public/components/swordsmanprnt.png';

export function Profile() {

  return (
    <div>
      <div className='flex items-center'>
        <div className='rounded-full border-silver border-2 z-10 -mr-4'>
          <Image src={profile} className='border-4 rounded-full border-main' alt='profile' />
        </div>
        <div className='flex flex-col bg-main px-8 py-2'>
          <p>Kalev</p>
          <p>Silver flame</p>
        </div>
      </div>


      <div>

      </div>
    </div>
  );
}

"use client";
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import profile from '@/../public/components/swordsmanprnt.png';

type ITalkProps = {
    text: any,
    img?: string;
  };

export function TalkSection({ text, img }: ITalkProps) {

    return (
        <>
            <div className='flex items-center'>
                <div className='rounded-full border-silver z-0 border-2 -mr-5'>
                    <Image src={profile} className='border-4 -z-[2] rounded-full border-main' alt='profile' />
                </div>
                <div className='flex items-start flex-col border-2 bg-main px-8 py-2 rounded-r-lg border-silver'>
                    <p className='flex items-center gap-0.5' dangerouslySetInnerHTML={{ __html: text }}>
                    </p>
                </div>
            </div>
        </>
    );
}

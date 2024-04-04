"use client";
import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { Profile } from './Profile';
import menubtn from '@/../public/components/menu-icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Cog8ToothIcon, Squares2X2Icon, UserCircleIcon } from '@heroicons/react/16/solid';

const links = [
  {
    text: 'Profile',
    url: '',
    icon: <UserCircleIcon width={18} />
  },
  {
    text: 'Locations',
    url: '/start/quick-select',
    icon: <Squares2X2Icon width={18} />
  },
  {
    text: 'Tutorial',
    url: '',
    icon: <Cog8ToothIcon width={18} />
  },
  {
    text: 'Settings',
    url: '',
    icon: <Cog8ToothIcon width={18} />
  },
  {
    text: 'Disconnect',
    url: '',
    icon: <Cog8ToothIcon width={18} />
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='fixed top-0 z-30 w-full flex justify-between p-6'>
      <Profile />
      <div className='relative transition-all'>
        <button className='hover:scale-95' type='button' onClick={() => setIsOpen(!isOpen)}>
          <Image src={menubtn} alt='menu' />
        </button>
        <ul ref={menuRef} className={classNames('bg-main border-silver border-2 divide-y p-4 transition-all absolute top-0 -left-20', { 'hidden': !isOpen })}>
          {links.map((item) => (
            <li key={item.text}>
              <Link className='flex items-center gap-1 my-1' href={item.url}><span>{item.icon}</span>{item.text}</Link>
            </li>
          ))}
        </ul>

      </div>
    </header>
  );
}

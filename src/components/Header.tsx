"use client";
import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { Profile } from './Profile';
import menubtn from '@/../public/components/menu-icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Cog8ToothIcon, Squares2X2Icon, UserCircleIcon } from '@heroicons/react/16/solid';
import { useGetWalletId } from '@/presentation/hook/useGetWalletId';
import { createSignOutUsecase } from '@/factories/createSignOutUsecase';
import { useRouter } from "next/navigation";
import { Pages } from '@/presentation/enums/pages';

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

const loggof = createSignOutUsecase();

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const [wallet, setWallet] = useState<string | undefined>(undefined);
  const [isOpenWalletOption, setIsOpenWalletOption] = useState(false);
  const router = useRouter();

  async function desconnect() {
    await loggof.execute();
    router.push(Pages.HOME)
    return;
  }

  useEffect(() => {
    setWallet(useGetWalletId());
  }, [])

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
    <header className='w-full flex justify-between p-6'>
      <Profile />
      <div className='relative transition-all flex space-x-2 items-center'>
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
        {wallet && (
          <>
            <div className='relative transition-all'>
              <button className='overflow-hidden text-ellipsis bg-main border-silver p-2 pr-6 pl-6 rounded-lg hover:scale-95 max-w-[180px]' type='button' onClick={() => setIsOpenWalletOption(!isOpenWalletOption)}>
                {wallet}
              </button>
            </div>
            <ul ref={menuRef} className={classNames('bg-main rounded-lg border-silver border-2 divide-y p-2 pr-6 pl-6 transition-all absolute top-16 left-20', { 'hidden': !isOpenWalletOption })}>
              <button className='overflow-hidden text-ellipsis bg-main border-silver p-2 pr-6 pl-6 rounded-lg hover:scale-95 max-w-[180px]' type='button' onClick={() => desconnect()}>
                <li>
                  Disconnect
                </li>
              </button>
            </ul>
          </>
        )}
      </div>
    </header>
  );
}

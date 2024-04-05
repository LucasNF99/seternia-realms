"use client";
import classNames from 'classnames';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import closeButton from '@/../public/components/closeModal.svg';
import questionButton from '@/../public/components/question.svg';

type IModalProps = {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode
};

export function BaseModal({ onClose, isOpen, children }: IModalProps) {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      className={classNames("h-full flex justify-center items-center",
        { 'hidden': !isOpen }
      )}
      ref={constraintsRef}
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="flex h-full w-full justify-center bg-transparent items-center"
      >
        <article className="flex w-full max-w-[75%] min-h-[500px]  flex-col h-full p-4 bg-main border-2 border-silver rounded-lg">
          <header className='flex justify-between'>
            <button type='button'>
              <Image width={30} src={questionButton} alt='Question button' />
            </button>
            <button type='button' onClick={onClose}>
              <Image width={30} src={closeButton} alt='Close modal button' />
            </button>
          </header>
          {children}
          <footer></footer>
        </article>
      </motion.div>
    </motion.div>
  );
}

"use client";
import { Dialog, Transition } from "@headlessui/react";
import classNames from 'classnames';
import { X } from "lucide-react";
import { Fragment, ReactNode, useEffect  } from "react";

interface IModalProps {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
  full?: boolean;
}

export default function Modal({ isOpen, onClose, children, full }: IModalProps) {
  useEffect(() => {
    return () => {
      onClose();
    };
  }, []);

  if (isOpen != true)
    isOpen = false;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={classNames("w-full transform overflow-auto rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-zinc-950", full ? "max-w-6xl max-h-[600px]" : " max-w-2xl max-h-[500px]")}>
                  <div className="absolute right-2 top-2">
                    <button
                      type="button"
                      className="lg:focus:ring-primary-light flex h-10 w-10 items-center justify-center rounded-sm border dark:border-zinc-950 border-white bg-white text-slate-900 hover:text-gray-500  focus:outline-none focus:ring-0 dark:bg-zinc-950"
                      onClick={onClose}
                    >
                      <span id="closeLabel" className="sr-only">
                        Close
                      </span>
                      <X
                        width={14}
                        height={14}
                        className=" h-3.5 w-3.5 text-slate-900 dark:text-white"
                        aria-labelledby="closeLabel"
                      />
                    </button>
                  </div>

                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

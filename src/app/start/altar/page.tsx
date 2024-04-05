"use client";
import { BaseModal } from "@/components/BaseModal";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation'

export default function QuickSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname.includes("/quick-select")) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [pathname]);

  function handleClose(): void {
    router.push('/start')
  }

  return (
    <>
      <BaseModal isOpen={isOpen} onClose={handleClose}>
        <h2 className="text-center text-3xl mb-2">Fast Travel</h2>
      </BaseModal>
    </>
  );
}

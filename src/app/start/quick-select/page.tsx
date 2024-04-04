"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function QuickSelect() {
  const constraintsRef = useRef(null);
  return (
    <motion.div className="h-full flex overflow-hidden justify-center items-center" ref={constraintsRef}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className=" flex bg-main h-full w-full justify-center items-center "
      >
        ola mundo
      </motion.div>
    </motion.div>

  );
}

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
        className="flex h-full w-full justify-center bg-transparent items-center"
      >
        <div className="w-max-[800px] h-max-[800px] w-96 h-96 flex bg-main justify-center text-center items-center rounded-lg">
          ola mundo
        </div>
      </motion.div>
    </motion.div>

  );
}

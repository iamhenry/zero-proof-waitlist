"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Digit({ value }: { value: number }) {
  return (
    <div className="relative w-[1.1ch] h-[1.1em] overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={value}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{
            y: {
              type: "spring",
              stiffness: 400,
              damping: 35,
              mass: 0.2,
            },
            opacity: { duration: 0.15 },
          }}
          className="absolute inset-x-0 text-white text-[20px] font-bold tabular-nums leading-none"
          style={{
            fontFeatureSettings: '"tnum"',
            transform: "translateZ(0)",
          }}
        >
          {value}
        </motion.div>
      </AnimatePresence>
      {/* Invisible text to maintain width */}
      <div
        aria-hidden="true"
        className="invisible text-white text-[20px] font-bold leading-none select-none"
      >
        0
      </div>
    </div>
  );
}

function TimeUnitDisplay({ value, unit }: { value: number; unit: string }) {
  // Split value into tens and ones
  const tensDigit = Math.floor(value / 10);
  const onesDigit = value % 10;

  return (
    <div className="flex items-baseline">
      <div className="flex">
        <Digit value={tensDigit} />
        <Digit value={onesDigit} />
      </div>
      <div className="text-neutral-400 text-[15px] font-bold leading-none ml-0.5">
        {unit}
      </div>
    </div>
  );
}

export default function CountdownTimer() {
  const [startTime] = useState(() => {
    const now = Date.now();
    const threeEightTwelve =
      12 * 24 * 60 * 60 * 1000 + // 3 days
      8 * 60 * 60 * 1000 + // 8 hours
      12 * 60 * 1000; // 12 minutes
    return now - threeEightTwelve;
  });
  const [elapsedTime, setElapsedTime] = useState(Date.now() - startTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  // Calculate elapsed time units
  const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  return (
    <div className="w-[220px] px-5 py-3 bg-black rounded-[24px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.15)] border border-neutral-800 backdrop-blur-md flex flex-col justify-center items-center gap-1">
      <div className="text-center text-white text-[13px] font-medium leading-none">
        Sober for
      </div>
      <div className="flex items-baseline gap-4">
        <TimeUnitDisplay value={days} unit="d" />
        <TimeUnitDisplay value={hours} unit="h" />
        <TimeUnitDisplay value={minutes} unit="m" />
        <TimeUnitDisplay value={seconds} unit="s" />
      </div>
    </div>
  );
}

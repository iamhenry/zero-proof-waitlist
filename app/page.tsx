"use client";

import { WaitlistForm } from "@/components/forms/WaitlistForm";
import CountdownTimer from "@/components/ui/countdown-timer";
import Image from "next/image";
import { motion } from "framer-motion";

function AnimatedContent() {
  return (
    <div className="w-full max-w-4xl space-y-8">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-[120px] md:h-[120px] mx-auto mb-8"
        >
          <Image
            src="/zp-app-icon.png"
            alt="Zero Proof App Icon"
            width={120}
            height={120}
            className="w-full h-full"
            priority
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-extrabold tracking-tight text-neutral-800 font-albert"
        >
          Every Sober Day Counts. See Exactly How Much.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-xl text-zinc-800 opacity-80 font-albert"
        >
          Watch your health improve and savings grow in real-time
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 text-sm text-zinc-800 opacity-80 font-albert"
        >
          Coming soon to iOS
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex justify-center"
      >
        <div className="w-96">
          <WaitlistForm />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="relative w-[80%] mx-auto"
      >
        <div className="relative aspect-[1.5/1] bg-[url('/zero-proof-ui.png')] bg-contain bg-center bg-no-repeat">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[2rem]">
            <CountdownTimer />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-12 bg-[#F9F9F9]">
      <AnimatedContent />
    </main>
  );
}

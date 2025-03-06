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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="w-full text-center"
      >
        <h2 className="text-3xl font-bold mb-8 text-neutral-800 font-albert">
          App Progress
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Most recent tweets at the top */}
          <blockquote className="twitter-tweet" data-media-max-width="560">
            <p lang="en" dir="ltr">
              My calendar is my todo list
              <br />
              <br />
              Blocking out time for deep work
              <a href="https://t.co/MbNqk8U7Rf">pic.twitter.com/MbNqk8U7Rf</a>
            </p>
            &mdash; Henry Moran (@soyhenryxyz){" "}
            <a href="https://twitter.com/soyhenryxyz/status/1897726452147294437?ref_src=twsrc%5Etfw">
              March 6, 2025
            </a>
          </blockquote>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
          <blockquote className="twitter-tweet" data-media-max-width="560">
            <p lang="en" dir="ltr">
              First iterations of my app (Zero Proof) icon the for the sobriety
              app I&#39;m building. A sobriety coach to help you quit drinking
              <br />
              <br />
              option a: a tile from the streaks element
              <br />
              option b: a bit more literal
              <br />
              <br />
              I&#39;m refining it but what are your initial impressions?{" "}
              <a href="https://t.co/kqtCz7NsXS">pic.twitter.com/kqtCz7NsXS</a>
            </p>
            &mdash; Henry Moran (@soyhenryxyz){" "}
            <a href="https://twitter.com/soyhenryxyz/status/1897715828671627422?ref_src=twsrc%5Etfw">
              March 6, 2025
            </a>
          </blockquote>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              I&#39;m looking for feedback on this waitlist to see if it&#39;s
              clear
              <br />
              <br />A sobriety ios app to help you quit / reduce consumption{" "}
              <br />
              <br />
              it&#39;s for folks who want to visually track progress for sober
              days, use data as motivation, track saved $, track eliminated
              calories, stay accountable{" "}
              <a href="https://t.co/I4kecTD111">pic.twitter.com/I4kecTD111</a>
            </p>
            &mdash; Henry Moran (@soyhenryxyz){" "}
            <a href="https://twitter.com/soyhenryxyz/status/1895600478496637251?ref_src=twsrc%5Etfw">
              February 28, 2025
            </a>
          </blockquote>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </motion.div>
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

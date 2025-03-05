import { WaitlistForm } from "@/components/forms/WaitlistForm";
import CountdownTimer from "@/components/ui/countdown-timer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-12 bg-[#F9F9F9]">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[120px] md:h-[120px] mx-auto mb-8">
            <Image
              src="/zp-app-icon.png"
              alt="Zero Proof App Icon"
              width={120}
              height={120}
              className="w-full h-full"
              priority
            />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-800 font-albert">
            Every Sober Day Counts. See Exactly How Much.
          </h1>
          <p className="mt-4 text-xl text-zinc-800 opacity-80 font-albert">
            Watch your health improve and savings grow in real-time
          </p>
          <p className="mt-4 text-sm text-zinc-800 opacity-80 font-albert">
            Coming soon to iOS
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-96">
            <WaitlistForm />
          </div>
        </div>
        <div className="relative w-[80%] mx-auto">
          <div className="relative aspect-[1.5/1] bg-[url('/zero-proof-ui.png')] bg-contain bg-center bg-no-repeat">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[2rem]">
              <CountdownTimer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

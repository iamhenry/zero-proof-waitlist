import { WaitlistForm } from "@/components/forms/WaitlistForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-[#F9F9F9]">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-700 font-albert">
            Every Sober Day Counts. See Exactly How Much.
          </h1>
          <p className="mt-4 text-xl text-zinc-800 opacity-80 font-albert">
            Watch your health improve and savings grow in real-time
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-96">
            <WaitlistForm />
          </div>
        </div>
        <div className="relative w-[80%] m-auto aspect-[1.5/1]">
          <Image
            src="/zero-proof-ui.png"
            alt="Zero Proof UI showing calendar view with streak and savings tracking"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </main>
  );
}

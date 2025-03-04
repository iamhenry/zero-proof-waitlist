import { WaitlistForm } from "@/components/forms/WaitlistForm";
import CountdownTimer from "@/components/ui/countdown-timer";

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

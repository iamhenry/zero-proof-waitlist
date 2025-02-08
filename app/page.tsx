import { WaitlistForm } from "@/components/forms/WaitlistForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Join the Waitlist
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Be the first to know when we launch. Sign up for early access.
          </p>
        </div>
        <WaitlistForm />
      </div>
    </main>
  );
}

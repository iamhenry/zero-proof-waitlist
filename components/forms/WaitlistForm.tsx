"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Thanks for joining the waitlist!");
      setEmail("");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to join waitlist"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <Input
          type="email"
          placeholder="email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-6 rounded-full pr-32 h-12 text-base shadow-none"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-2 top-2 h-8 px-3 bg-gradient-to-t from-red-500 to-orange-600 rounded-full flex items-center justify-center"
        >
          <span className="text-white text-xs font-bold font-inter leading-none">
            Join the Beta
          </span>
        </button>
      </div>
    </form>
  );
}

"use client";
import fetchOpenRouterAI from "@/lib/apis/ai-integration";

export default function Home() {
  return (
    <div className="">
      <button onClick={() => fetchOpenRouterAI()}>Click me</button>
      <button>Click me</button>
    </div>
  );
}

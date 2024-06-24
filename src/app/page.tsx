"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FDF4D3] p-8 flex gap-4 flex-col items-center justify-between">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-md flex items-center w-[250px] border border-neutral-900 p-4">
          <span>Someone&apos;s PC</span>
        </div>
        <Link
          className="cursor-pointer rounded-md flex items-center w-[250px] border border-neutral-900 p-4"
          href="/pc"
        >
          Your PC
        </Link>
      </div>
    </main>
  );
}

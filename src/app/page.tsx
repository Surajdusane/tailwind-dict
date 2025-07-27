"use client";
import { CommandDialogDemo } from "@/components/search-box";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen p-4 flex justify-center items-center">
      <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h1 className="text-balance uppercase text-5xl font-extralight">
            Tailwind CSS Offline Dictionary
          </h1>
          <h2 className="mx-auto my-8 max-w-2xl text-md">
            Browse all Tailwind utility classes without an internet connection.
          </h2>
          <CommandDialogDemo />
          <p className="pt-4 text-sm text-muted-foreground">
            Browse by{" "}
            <Link className="hover:underline" href={"/topics"}>Topics</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;

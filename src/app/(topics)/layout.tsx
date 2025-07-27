"use client";

import { CommandDialogDemo } from "@/components/search-box";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-16">
      <nav className="flex items-center justify-between sticky top-0 pt-4 z-10 bg-background ">
        <Button variant={"ghost"} size={"icon"} onClick={() => router.back()}>
          <ArrowLeft />
        </Button>
        <CommandDialogDemo />
      </nav>
      {children}
    </div>
  );
};

export default layout;

"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";

import { Button } from "@/components/ui/button";
import data from "@/data/cheatsheet.json";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function CommandDialogDemo() {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prevOpen) => !prevOpen);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        size={"lg"}
        variant={"ghost"}
        className="border-2 selection:bg-transparent rounded-none text-muted-foreground tracking-wide"
        onClick={() => setOpen(true)}
      >
        Press Ctrl + K
      </Button>
      <CommandDialog
        className="rounded-none border-[6px]"
        onOpenChange={setOpen}
        open={open}
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {data.map((item) => (
            <CommandGroup key={item.title} heading={item.title}>
              {item.content.map((value) => (
                  <CommandItem
                    key={value.title}
                    onSelect={() => {
                      // Use Next.js router
                      router.push(`/topics/${item.title}/${value.title}`);
                    }}
                  >
                    <ArrowRight />
                    <span>{value.title}</span>
                  </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}

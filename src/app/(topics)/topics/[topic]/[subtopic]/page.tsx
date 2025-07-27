"use client";

import data from "@/data/cheatsheet.json";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const page = () => {
  const { topic, subtopic } = useParams();
  const topicvalue = decodeURIComponent(topic as string);
  const matchedTopic = data.find((item) => item.title === topicvalue);
  const subtopics = matchedTopic?.content ?? [];

  const subtopicvalue = decodeURIComponent(subtopic as string);
  const matchedSubtopic = subtopics.find(
    (item) => item.title === subtopicvalue
  );


  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-1 mt-16 ">
        <p
          className="flex items-center gap-2 font-mono text-xs/6 font-medium tracking-widest text-muted-foreground uppercase"
          data-section="true"
        >
          {decodeURIComponent(topic as string)}
        </p>
        <h1
          data-title="true"
          className="mt-2 text-3xl font-medium tracking-tight flex justify-start gap-x-2 items-center"
        >
          {matchedSubtopic?.title}
          <Link href={matchedSubtopic?.docs ?? ""} target="_blank">
            <ExternalLink className="text-muted-foreground hover:text-input transition duration-300" />
          </Link>
        </h1>
        <p
          data-description="true"
          className="mt-6 text-base/7 text-muted-foreground"
        >
          {matchedSubtopic?.description}
        </p>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full divide-y divide-muted/30 text-sm text-muted-foreground tracking-wide">
          <tbody className="divide-y divide-muted/20">
            {matchedSubtopic?.table.map(([className, cssOutput], idx) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <nothing>
<tr key={idx}>
                <td className="py-2 px-4 text-primary">
                  {className}
                </td>
                <td className="py-2 px-4">{cssOutput}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;

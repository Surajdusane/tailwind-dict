import data from "@/data/cheatsheet.json";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "./ui/card";

const Topic = ({ topic }: { topic: string }) => {
  const topicvalue = decodeURIComponent(topic as string);
  const matchedTopic = data.find((item) => item.title === topicvalue);
  const subtopics = matchedTopic?.content ?? [];
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-start flex-wrap gap-y-4 gap-x-8">
        {subtopics.map((item) => (
            <Card
              onClick={() => router.push(`/topics/${topic}/${item.title}`)}
              key={item.title}
              className="bg-background/10 text-muted-foreground rounded-none w-64 hover:scale-105 transition-all duration-300"
            >
              <CardContent>{item.title}</CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
};

export default Topic;

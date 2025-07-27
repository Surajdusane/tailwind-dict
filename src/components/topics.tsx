import data from "@/data/cheatsheet.json";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "./ui/card";

const Topics = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <h1 className="my-6">Topics</h1>
      <div className="flex items-center justify-start flex-wrap gap-y-4 gap-x-8">
        {data.map((item) => (
            <Card
              key={item.title}
              onClick={() => router.push(`/topics/${item.title}`)}
              className="bg-background/10 text-muted-foreground rounded-none w-64 hover:scale-105 transition-all duration-300"
            >
              <CardContent>{item.title}</CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
};

export default Topics;

"use client"

import Topic from "@/components/topic";
import { useParams } from "next/navigation"

const page = () => {
  const {topic} = useParams();

  return (
    <div>
      <h1 className="my-6">{decodeURIComponent(topic as string)}</h1>
      <Topic topic={topic as string} />
    </div>
  );
}

export default page
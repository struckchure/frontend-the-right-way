import type { Article } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function ArticleList({ data }: { data: Article[] }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.map((article, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle>{article.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{article.body}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

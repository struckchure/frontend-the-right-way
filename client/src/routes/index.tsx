import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { ArticleCreate } from "@/components/article-create";
import { ArticleList } from "@/components/article-list";
import { articleListOptions } from "@/services/articles";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const articleListQuery = useQuery(articleListOptions);

  return (
    <section className="grid grid-cols-3 p-4">
      <div className="col-span-2">
        {articleListQuery.isLoading && <label>Loading ...</label>}
        {articleListQuery.data && <ArticleList data={articleListQuery.data} />}
      </div>

      <ArticleCreate />
    </section>
  );
}

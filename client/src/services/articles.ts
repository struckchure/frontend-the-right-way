import { mutationOptions, queryOptions } from "@tanstack/react-query";

import {
  createArticleArticlesPost,
  listArticlesArticlesGet,
  type ArticleCreateDto,
} from "@/lib/api";

export const articleListOptions = queryOptions({
  queryKey: ["articles/list"],
  queryFn: async () => await listArticlesArticlesGet(),
});

export const articleCreateOptions = mutationOptions({
  mutationFn: async (payload: ArticleCreateDto) =>
    await createArticleArticlesPost(payload),
});

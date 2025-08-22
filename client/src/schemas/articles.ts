import z from "zod";

export const ArticleCreateSchema = z.object({
  title: z.string().min(10, { error: "title is too small" }),
  body: z.string().min(20, { error: "content is not enough" }),
});

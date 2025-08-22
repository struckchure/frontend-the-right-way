import { useForm } from "@tanstack/react-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArticleCreateSchema } from "@/schemas/articles";
import { articleCreateOptions, articleListOptions } from "@/services/articles";
import { FieldError } from "./field-error";

export function ArticleCreate() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    ...articleCreateOptions,
    onSuccess: () => {
      queryClient.invalidateQueries(articleListOptions);
      toast.success("article created");
      form.reset();
    },
  });
  const form = useForm({
    defaultValues: { title: "", body: "" },
    validators: { onChange: ArticleCreateSchema },
    onSubmit: ({ value }) => mutation.mutate(value),
  });

  return (
    <form
      className="space-y-2"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.Field name="title">
        {(field) => (
          <>
            <Input
              placeholder="title"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
            <FieldError field={field} />
          </>
        )}
      </form.Field>

      <form.Field name="body">
        {(field) => (
          <>
            <Textarea
              placeholder="content"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
            <FieldError field={field} />
          </>
        )}
      </form.Field>

      <Button className="block">Create</Button>
    </form>
  );
}

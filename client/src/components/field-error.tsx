import type { AnyFieldApi } from "@tanstack/react-form";

export function FieldError({ field }: { field: AnyFieldApi }) {
  return field.state.meta.isTouched && !field.state.meta.isValid
    ? field.state.meta.errors.map((err) => (
        <em className="text-red-600" key={err.message}>
          {err.message}
        </em>
      ))
    : null;
}

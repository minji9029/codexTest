import { ReactNode } from "react";

export type DataState = "ready" | "loading" | "empty" | "error";

export default function DataState({
  state,
  title,
  description,
  action,
}: {
  state: DataState;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  if (state === "ready") {
    return null;
  }

  return (
    <div className="flex flex-col items-start gap-2 rounded-2xl border border-dashed border-neutral-200 bg-white p-6 text-sm text-neutral-600">
      <p className="font-semibold text-neutral-900">{title}</p>
      {description && <p>{description}</p>}
      {action}
    </div>
  );
}

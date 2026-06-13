import { SearchX } from "lucide-react";
import Button from "./Button.jsx";

export default function EmptyState({ title, description, actionLabel, actionPath }) {
  return (
    <div className="rounded-lg border border-dashed border-[#D7C9AB] bg-white/75 px-6 py-14 text-center">
      <SearchX className="mx-auto h-10 w-10 text-[#8B6F47]" aria-hidden="true" />
      <h2 className="mt-4 text-xl font-bold text-[#111827]">{title}</h2>
      <p className="mx-auto mt-2 max-w-xl text-[#6B7280]">{description}</p>
      {actionLabel && actionPath ? (
        <Button to={actionPath} className="mt-6">
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}

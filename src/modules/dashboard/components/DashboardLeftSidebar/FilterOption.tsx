"use client";

interface FilterOptionProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  count?: number;
}

export function FilterOption({
  label,
  checked,
  onChange,
  count,
}: FilterOptionProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded-md px-1 py-1.5 text-sm hover:bg-muted/50">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 shrink-0 rounded border-border"
      />

      <span className="min-w-0 flex-1 truncate">
        {label}
      </span>

      {count !== undefined && (
        <span className="shrink-0 text-xs text-muted-foreground">
          {count}
        </span>
      )}
    </label>
  );
}
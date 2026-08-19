"use client";

import { forwardRef, InputHTMLAttributes } from "react";

import { Input } from "@/components/ui/input";

type SearchInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
>;

export const SearchInput = forwardRef<
  HTMLInputElement,
  SearchInputProps
>((props, ref) => {
  return (
    <Input
      ref={ref}
      {...props}
      className={`
        h-12
        rounded-none
        border-r-0
        text-base
        shadow-none
        focus-visible:ring-0
        focus-visible:border-primary
        ${props.className ?? ""}
      `}
    />
  );
});

SearchInput.displayName = "SearchInput";
"use client";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";

interface SearchButtonProps {
  onClick?: () => void;
}

export function SearchButton({
  onClick,
}: SearchButtonProps) {
  return (
    <Button
      type="button"
      onClick={onClick}
      className="
        h-12
        rounded-none
        bg-primary
        px-8
        hover:bg-primary/90
      "
    >
      <Search className="mr-2 h-4 w-4" />

      Pesquisar
    </Button>
  );
}
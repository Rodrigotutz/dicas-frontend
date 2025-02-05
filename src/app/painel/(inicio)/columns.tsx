"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Dicas = {
  id: string;
  title: string;
  description: string;
};

export const columns: ColumnDef<Dicas>[] = [
  {
    accessorKey: "id",
    header: "Dica",
  },
  {
    accessorKey: "title",
    header: "Titulo",
  },
  {
    accessorKey: "description",
    header: "Descrição",
    cell: ({ row }) => {
      return (
        <div className="w-full max-w-2xl overflow-hidden text-ellipsis whitespace-nowrap">
          {row.original.description}
        </div>
      );
    },
  },
];

"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./cell-action";

export type ColorColumn = {
  id: string;
  name: string;
  value: string;
  createdAt: string;
};

export const columns: ColumnDef<ColorColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.value}
        <div 
          className="h-6 w-6 rounded-full border border-gray-600"
          style={{ backgroundColor: row.original.value }}
        />
      </div>
    )
  },
  {
    accessorKey: "createdAt",
    header: "Creation date",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="text-right">
          <CellAction data={row.original} />
        </div>
      )
    }
  },
];

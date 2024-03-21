"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./cell-action";

export type BillboardColumn = {
  id: string;
  label: string;
  createdAt: string;
};

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
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

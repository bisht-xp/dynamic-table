"use client";

import Grid from "./Grid";
import { GridFooterContent } from "./footer-column";
import { useEffect, useState } from "react";
import { fetchTableColumns, fetchTableData } from "@/lib/api";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";
import FilterComponent from "../filter-section/FilterComponent";
import { TableHeaderSkeleton, TableBodySkeleton } from "./TableSkeleton";
import { LeadData } from "@/types/table";
import { FOOTER_LEFT_ITEMS, FOOTER_RIGHT_ITEMS } from "@/lib/table-data";

const TableComponent = () => {
  const [columns, setColumns] = useState<ColumnDef<LeadData, unknown>[]>([]);
  const [data, setData] = useState<LeadData[]>([]);

  const [isColumnsLoading, setIsColumnsLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    fetchTableColumns().then((cols) => {
      setColumns(cols as ColumnDef<LeadData, unknown>[]);
      setIsColumnsLoading(false);
    });

    fetchTableData().then((tableData) => {
      setData(tableData);
      setIsDataLoading(false);
    });
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <FilterComponent />
      <Grid>
        {isColumnsLoading ? (
          <TableHeaderSkeleton />
        ) : (
          <Grid.Header>
            {table.getHeaderGroups().map((headerGroup) => (
              <Grid.HeaderRow key={headerGroup.id}>
                <Grid.HeaderRowNumber />
                {headerGroup.headers.map((header) => (
                  <Grid.HeaderCell key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </Grid.HeaderCell>
                ))}
              </Grid.HeaderRow>
            ))}
          </Grid.Header>
        )}

        {isDataLoading ? (
          <TableBodySkeleton rows={19} />
        ) : (
          <Grid.Body>
            {table.getRowModel().rows.map((row, index) => (
              <Grid.Row key={row.id}>
                <Grid.RowNumber number={index + 1} />
                {row.getVisibleCells().map((cell) => (
                  <Grid.Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Grid.Cell>
                ))}
              </Grid.Row>
            ))}
          </Grid.Body>
        )}

        <Grid.Footer>
          <Grid.FooterRow>
            <Grid.FooterRowNumber />
            <Grid.FooterCell>
              <GridFooterContent
                leftItems={FOOTER_LEFT_ITEMS}
                rightItems={FOOTER_RIGHT_ITEMS}
              />
            </Grid.FooterCell>
          </Grid.FooterRow>
        </Grid.Footer>
      </Grid>
    </>
  );
};

export default TableComponent;

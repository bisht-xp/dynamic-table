"use client";

import { cn } from "@/lib/utils";

export const TableHeaderSkeleton = () => (
  <thead className="bg-[#f8f9fa] sticky top-0 z-20 border-2 border-[#E5E7EB]">
    <tr>
      <th className="w-8 border-b border-r border-slate-300 bg-[#FAFAFA]" />
      {Array.from({ length: 6 }).map((_, i) => (
        <th
          key={i}
          className="w-[190px] h-[30px] px-2 py-1 border-b-3 border-r-2 border-[#E5E7EB] bg-[#FAFAFA]"
        >
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
        </th>
      ))}
    </tr>
  </thead>
);

export const TableBodySkeleton = ({ rows = 30 }: { rows?: number }) => (
  <tbody>
    {Array.from({ length: rows }).map((_, rowIdx) => (
      <tr key={rowIdx} className="hover:bg-blue-50/50">
        <td className="w-10 text-center bg-[#f8f9fa] border-r border-b border-slate-300">
          <div className="h-3 w-4 mx-auto bg-gray-200 rounded animate-pulse" />
        </td>
        {Array.from({ length: 7 }).map((_, colIdx) => (
          <td
            key={colIdx}
            className="p-0 border-r border-b border-slate-200 min-h-[32px]"
          >
            <div className="px-3 py-1.5">
              <div
                className={cn(
                  "h-4 bg-gray-200 rounded animate-pulse",
                  colIdx % 2 === 0 ? "w-24" : "w-32"
                )}
              />
            </div>
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);

export const TableFooterSkeleton = () => (
  <div className="bg-white border-t border-[#E5E7EB] h-10 flex items-center">
    <div className="flex items-center h-full w-full">
      <div className="w-10 h-full border-r border-slate-300 bg-[#FAFAFA] shrink-0" />
      <div className="flex-1 flex items-center justify-between px-3">
        <div className="flex items-center gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-6 w-20 bg-gray-200 rounded animate-pulse"
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-6 w-16 bg-gray-200 rounded animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

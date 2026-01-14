import React from "react";
import { cn } from "@/lib/utils";

const Grid = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const childArray = React.Children.toArray(children);
  const footer = childArray.find(
    (child) => React.isValidElement(child) && child.type === Grid.Footer
  );
  const tableChildren = childArray.filter(
    (child) => !(React.isValidElement(child) && child.type === Grid.Footer)
  );

  return (
    <div
      className={cn(
        "w-full flex flex-col border border-[#E5E7EB] rounded-md bg-white shadow-sm h-[calc(100vh-142.6px)]",
        className
      )}
    >
      <div className="flex-1 overflow-auto">
        <table className="w-full border-collapse table-fixed text-sm">
          {tableChildren}
        </table>
      </div>
      {footer}
    </div>
  );
};

Grid.Header = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <thead
    className={cn(
      "bg-[#f8f9fa] sticky top-0 z-20 border-2 border-[#E5E7EB]",
      className
    )}
  >
    {children}
  </thead>
);

Grid.HeaderRow = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <tr className={className}>{children}</tr>;

Grid.HeaderRowNumber = ({ className = "" }: { className?: string }) => (
  <th
    className={cn(
      "w-8 border-b border-r border-slate-300 bg-[#FAFAFA]",
      className
    )}
  />
);

Grid.HeaderCell = ({
  children,
  className = "",
  onClick,
  onDoubleClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
}) => (
  <th
    className={cn(
      "w-[200px] h-[30px] px-2 py-1 border-b-3 border-r-2 border-[#E5E7EB]",
      "font-medium text-[#374151] text-xs cursor-pointer relative group bg-[#FAFAFA]",
      "text-left",
      className
    )}
    onClick={onClick}
    onDoubleClick={onDoubleClick}
  >
    {children}
  </th>
);

Grid.Body = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <tbody className={className}>{children}</tbody>;

Grid.Row = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <tr className={cn("hover:bg-blue-50/50 group", className)}>{children}</tr>
);

Grid.RowNumber = ({
  number,
  className = "",
}: {
  number: number;
  className?: string;
}) => (
  <td
    className={cn(
      "w-10 text-center bg-[#f8f9fa] border-r border-b border-slate-300 text-[10px] text-slate-400 select-none",
      className
    )}
  >
    {number}
  </td>
);

Grid.Cell = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <td
    className={cn(
      "p-0 border-r border-b border-slate-200 min-h-[32px]",
      className
    )}
  >
    <div className="px-3 py-1.5 outline-none min-h-[32px]">{children}</div>
  </td>
);

Grid.Footer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "bg-white border-t border-[#E5E7EB] h-10 flex items-center hidden md:block",
      className
    )}
  >
    {children}
  </div>
);

Grid.FooterRow = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex items-center h-full w-full", className)}>
    {children}
  </div>
);

Grid.FooterRowNumber = ({ className = "" }: { className?: string }) => (
  <div
    className={cn(
      "w-10 h-full border-r border-slate-300 bg-[#FAFAFA] shrink-0",
      className
    )}
  />
);

Grid.FooterCell = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
}) => (
  <div className={cn("flex-1 flex items-center h-full bg-white", className)}>
    {children}
  </div>
);

export default Grid;

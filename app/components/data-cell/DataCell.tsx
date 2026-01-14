import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { MdChevronRight } from "react-icons/md";
import Link from "next/link";

interface DataCellProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const DataCell = ({ children, className, onClick }: DataCellProps) => (
  <div
    onClick={onClick}
    className={cn(
      "flex items-center h-full w-full text-sm transition-all",
      className
    )}
  >
    {children}
  </div>
);

DataCell.Text = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className="flex items-center justify-center">
      <span
        className={cn(
          "text-xs text-[#374151] font-normal text-nowrap",
          className
        )}
      >
        {text}
      </span>
    </div>
  );
};

DataCell.Icon = ({
  icon: Icon,
  className = "",
}: {
  icon: IconType;
  className?: string;
}) => {
  if (!Icon) return null;
  return <Icon className={cn("w-4 h-4 shrink-0", className)} />;
};

DataCell.IconBox = ({
  icon: Icon,
  bgColor = "bg-[#EDF3EC]",
  iconColor = "text-[#347FA9]",
  className = "",
}: {
  icon: IconType;
  bgColor?: string;
  iconColor?: string;
  className?: string;
}) => {
  if (!Icon) return null;
  return (
    <div
      className={cn(
        "w-5 h-5 rounded-md flex justify-center items-center",
        bgColor,
        className
      )}
    >
      <Icon className={cn("w-3 h-3", iconColor)} />
    </div>
  );
};

DataCell.StackedIcons = ({ children }: { children: ReactNode }) => (
  <div className="relative w-7.5 flex justify-center items-center">
    {children}
  </div>
);

DataCell.StackedIcon = ({
  icon: Icon,
  bgColor = "bg-[#EDF3EC]",
  iconColor = "text-[#347FA9]",
  position = "base",
  className = "",
}: {
  icon: IconType;
  bgColor?: string;
  iconColor?: string;
  position?: "base" | "overlay";
  className?: string;
}) => {
  if (!Icon) return null;
  return (
    <div
      className={cn(
        "w-5 h-5 rounded-md flex justify-center items-center",
        bgColor,
        position === "overlay" && "absolute left-4",
        className
      )}
    >
      <Icon className={cn("w-3 h-2.3", iconColor)} />
    </div>
  );
};

DataCell.Profile = ({ name, color }: { name: string; color: string }) => (
  <div className="flex items-center gap-2 overflow-hidden">
    <div
      className={cn(
        "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0",
        color
      )}
    >
      {name.charAt(0)}
    </div>
    <span className="truncate font-medium text-slate-700">{name}</span>
  </div>
);

DataCell.Company = ({
  name,
  icon: Icon,
  iconClassName = "",
  className = "",
}: {
  name: string;
  icon: IconType;
  iconClassName?: string;
  className?: string;
}) => (
  <div className="flex items-center gap-2 overflow-hidden">
    {Icon && (
      <Icon
        className={cn("w-3.5 h-3.5 text-[#9CA3AF] shrink-0", iconClassName)}
      />
    )}
    <span className={cn("truncate text-xs text-[#111928]", className)}>
      {name}
    </span>
  </div>
);

DataCell.Link = ({
  url,
  icon: Icon,
  className = "",
}: {
  url: string;
  icon?: IconType;
  className?: string;
}) => (
  <Link
    href={url}
    className={cn(
      "group/link flex items-center gap-2 cursor-pointer overflow-hidden min-w-0 w-full",
      className
    )}
  >
    {Icon && (
      <Icon className="w-4 h-4 shrink-0 text-[#9CA3AF] group-hover/link:text-blue-600 transition-colors duration-200" />
    )}
    <span className="truncate underline text-[#4B5563] group-hover/link:text-blue-600 font-normal text-xs transition-colors duration-200">
      {url}
    </span>
  </Link>
);

DataCell.Row = ({
  children,
  gap = 2,
  className = "",
}: {
  children: ReactNode;
  gap?: number;
  className?: string;
}) => (
  <div className={cn("flex items-center", `gap-${gap}`, className)}>
    {children}
  </div>
);

// Dropdown sub-component
DataCell.Dropdown = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "flex items-center justify-between gap-2 px-5 py-0.5 w-full min-w-[100px] h-[24px] rounded-2xl cursor-pointer",
      className
    )}
  >
    {children}
    <MdChevronRight className="w-5 h-5 shrink-0 text-[#9CA3AF]" />
  </div>
);

DataCell.Badge = ({
  text,
  variant = "default",
  className = "",
}: {
  text: string;
  variant?: "default" | "success" | "warning" | "error";
  className?: string;
}) => {
  const variantClasses = {
    default: "bg-slate-100 text-slate-600",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    error: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={cn(
        "px-2 py-0.5 rounded text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {text}
    </span>
  );
};

DataCell.Toggle = ({
  label,
  checked = false,
  onChange,
  className = "",
}: {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}) => (
  <button
    onClick={() => onChange?.(!checked)}
    className={cn(
      "flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded",
      "border transition-colors",
      checked
        ? "bg-[#DCFCE7] border-[#86EFAC] text-[#166534]"
        : "bg-white border-[#E5E7EB] text-[#6B7280] hover:bg-gray-50",
      className
    )}
  >
    {/* Toggle Switch */}
    <div
      className={cn(
        "w-6 h-3.5 rounded-full relative transition-colors",
        checked ? "bg-[#22C55E]" : "bg-[#D1D5DB]"
      )}
    >
      <div
        className={cn(
          "absolute w-2.5 h-2.5 bg-white rounded-full top-0.5 transition-all shadow-sm",
          checked ? "right-0.5" : "left-0.5"
        )}
      />
    </div>
    {label}
  </button>
);

DataCell.ActionButton = ({
  label,
  icon: Icon,
  variant = "default",
  onClick,
  className = "",
}: {
  label: string;
  icon?: IconType;
  variant?: "default" | "danger" | "primary" | "support";
  onClick?: () => void;
  className?: string;
}) => {
  const variantClasses = {
    default: "bg-white border-[#E5E7EB] text-[#6B7280] hover:bg-gray-50",
    danger: "bg-[#FEE2E2] border-[#FECACA] text-[#DC2626] hover:bg-[#FECACA]",
    primary: "bg-[#1F2A37] border-[#1F2A37] text-white hover:bg-[#374151]",
    support: "bg-[#EEF2FF] border-[#C7D2FE] text-[#4F46E5] hover:bg-[#E0E7FF]",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded",
        "border transition-colors",
        variantClasses[variant],
        className
      )}
    >
      {Icon && <Icon className="w-3 h-3" />}
      {label}
    </button>
  );
};

DataCell.Tab = ({
  label,
  isActive = false,
  onClick,
  className = "",
}: {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "px-3 h-full text-xs font-medium whitespace-nowrap",
      "border-r border-[#E5E7EB]",
      "hover:bg-gray-100 transition-colors",
      isActive ? "text-[#374151] bg-gray-50" : "text-[#6B7280]",
      className
    )}
  >
    {label}
  </button>
);

DataCell.Tag = ({
  label,
  icon: Icon,
  variant = "warning",
  className = "",
}: {
  label: string;
  icon?: IconType;
  variant?: "default" | "warning" | "success" | "info";
  className?: string;
}) => {
  const variantClasses = {
    default: "bg-[#F3F4F6] text-[#374151]",
    warning: "bg-[#FEF3C7] text-[#92400E]",
    success: "bg-[#DCFCE7] text-[#166534]",
    info: "bg-[#DBEAFE] text-[#1E40AF]",
  };

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 px-3 h-full",
        "text-xs font-medium",
        "border-r border-[#E5E7EB]",
        variantClasses[variant],
        className
      )}
    >
      {Icon && <Icon className="w-3 h-3" />}
      {label}
    </div>
  );
};

DataCell.AddButton = ({
  label,
  icon: Icon,
  onClick,
  className = "",
}: {
  label: string;
  icon?: IconType;
  onClick?: () => void;
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-1.5 px-3 h-full",
      "text-xs font-medium text-[#6B7280]",
      "border-r border-[#E5E7EB]",
      "hover:bg-gray-50 transition-colors",
      className
    )}
  >
    {Icon && <Icon className="w-3.5 h-3.5" />}
    {label}
  </button>
);

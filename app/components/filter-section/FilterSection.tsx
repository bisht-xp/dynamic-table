"use client";

import { useState, createContext, useContext, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FaChevronDown } from "react-icons/fa";

type FilterItemVariant = "default" | "primary" | "success" | "avatar" | "dot";

interface FilterItemContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  variant: FilterItemVariant;
}

interface FilterItemProps {
  children: ReactNode;
  variant?: FilterItemVariant;
  className?: string;
}

interface FilterTriggerProps {
  children: ReactNode;
  icon?: ReactNode;
  badge?: number | string;
  hasDropdown?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "default" | "dot";
}

interface FilterContentProps {
  children: ReactNode;
  className?: string;
}

interface FilterDividerProps {
  className?: string;
}

interface FilterBadgeProps {
  children: ReactNode;
  className: string;
}

interface FilterContentItemProps {
  children: ReactNode;
  className?: string;
}

const FilterItemContext = createContext<FilterItemContextType | null>(null);

const useFilterItem = () => {
  const context = useContext(FilterItemContext);
  if (!context) {
    throw new Error("Filter components must be used within FilterItem");
  }
  return context;
};

const FilterSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-white border-b border-[#E5E7EB] px-2 md:px-4 py-2 flex items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

FilterSection.Group = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>{children}</div>
  );
};

FilterSection.Item = ({
  children,
  variant = "default",
  className,
}: FilterItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FilterItemContext.Provider value={{ isOpen, setIsOpen, variant }}>
      <div className={cn("relative", className)}>{children}</div>
    </FilterItemContext.Provider>
  );
};

FilterSection.Trigger = ({
  children,
  icon,
  badge,
  hasDropdown = false,
  onClick,
  className,
  type = "default",
}: FilterTriggerProps) => {
  const { isOpen, setIsOpen, variant } = useFilterItem();

  const handleClick = () => {
    if (hasDropdown) {
      setIsOpen(!isOpen);
    }
    onClick?.();
  };

  const variantStyles = {
    default:
      "bg-white text-[#374151] hover:bg-[#F9FAFB] border border-[#E5E7EB]",
    primary: "bg-[#6366F1] text-white hover:bg-[#5558E3]",
    success: "bg-[#7C3AED] text-white hover:bg-[#6D28D9]",
    avatar: "bg-transparent p-0",
    dot: "bg-[#1A56DB] text-white w-1 h-2 rounded-full",
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors duration-150 cursor-pointer relative",
        variantStyles[variant],
        variant === "avatar" && "p-0",
        className
      )}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      <span>{children}</span>
      {badge !== undefined && (
        <span
          className={cn(
            "w-4 h-4 flex items-center justify-center text-[10px] font-semibold rounded-full ml-0.5 absolute -right-2 top-0 transform -translate-y-1/2",
            type === "default"
              ? "bg-[#1A56DB] text-white"
              : "bg-[#1A56DB] text-white w-2 h-2 rounded-full absolute -right-1 top-0 transform -translate-y-1/2"
          )}
        >
          {badge}
        </span>
      )}
      {hasDropdown && (
        <FaChevronDown
          className={cn(
            "w-2.5 h-2.5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      )}
    </button>
  );
};

FilterSection.Content = ({ children, className }: FilterContentProps) => {
  const { isOpen } = useFilterItem();

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "absolute top-full left-0 mt-1 w-full min-w-[130px] bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-50 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

FilterSection.ContentItem = ({
  children,
  className,
}: FilterContentItemProps) => {
  // const { selectOption } = useFilterItem();
  return (
    <div
      onClick={() => {}}
      className="px-3 py-2 text-xs text-gray-500 hover:bg-[#F9FAFB] cursor-pointer overflow-hidden"
    >
      {children}
    </div>
  );
};

FilterSection.Divider = ({ className }: FilterDividerProps) => {
  return <div className={cn("w-px h-5 bg-[#E5E7EB] mx-1.5", className)} />;
};

FilterSection.Badge = ({ children, className }: FilterBadgeProps) => {
  return <span className={cn("", className)}>{children}</span>;
};

FilterSection.Icon = ({
  icon: Icon,
  className = "",
}: {
  icon: React.ElementType;
  className?: string;
}) => {
  return <Icon className={cn("w-3.5 h-3.5", className)} />;
};

FilterSection.StackedIcons = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn("relative w-7.5 flex justify-center items-center", className)}
  >
    {children}
  </div>
);

FilterSection.StackedIcon = ({
  icon: Icon,
  color = "text-[#347FA9]",
  position = "base",
  className = "",
}: {
  icon: React.ElementType;
  color?: string;
  position?: "base" | "overlay";
  className?: string;
}) => (
  <div
    className={cn(
      "w-5 h-5 rounded-md flex justify-center items-center",
      color,
      position === "overlay" && "absolute left-4",
      className
    )}
  >
    <Icon className="w-3 h-2.3" />
  </div>
);

FilterSection.ActionButton = ({
  children,
  icon,
  variant = "default",
  hasDropdown = false,
  onClick,
  className = "",
}: {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "default" | "primary" | "outline";
  hasDropdown?: boolean;
  onClick?: () => void;
  className?: string;
}) => {
  const variantStyles = {
    default:
      "bg-white text-[#374151] border border-[#E5E7EB] hover:bg-[#F9FAFB]",
    primary: "bg-[#1F2A37] text-white hover:bg-[#374151]",
    outline:
      "bg-white text-[#374151] border border-[#E5E7EB] hover:bg-[#F9FAFB]",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors duration-150 cursor-pointer",
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      <span>{children}</span>
      {hasDropdown && <FaChevronDown className="w-2.5 h-2.5" />}
    </button>
  );
};

FilterSection.ImageButton = ({
  src,
  alt,
  width = 28,
  height = 28,
  onClick,
  className = "",
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  className?: string;
}) => {
  const NextImage = require("next/image").default;
  return (
    <button onClick={onClick} className={cn("flex items-center", className)}>
      <NextImage src={src} alt={alt} width={width} height={height} />
    </button>
  );
};

export default FilterSection;

"use client";

import { FooterItem } from "@/types/table";
import { DataCell } from "../data-cell/DataCell";
import { LuPlus, LuLayoutGrid, LuX } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export const FooterCellRenderer = ({
  item,
  onActiveChange,
  onCheckedChange,
}: {
  item: FooterItem;
  onActiveChange?: (id: string) => void;
  onCheckedChange?: (id: string, checked: boolean) => void;
}) => {
  switch (item.type) {
    case "addButton":
      return (
        <DataCell.AddButton
          label={item.label}
          icon={LuPlus}
          onClick={() => console.log("Add grid clicked")}
          className="px-2.5 py-1 rounded"
        />
      );

    case "tag":
      return (
        <DataCell.Tag
          label={item.label}
          icon={LuLayoutGrid}
          variant={item.variant as "default" | "warning" | "success" | "info"}
          className="px-2.5 py-1 rounded"
        />
      );

    case "tab":
      return (
        <DataCell.Tab
          label={item.label}
          isActive={item.isActive}
          onClick={() => onActiveChange?.(item.id)}
          className="px-2.5 py-1 rounded"
        />
      );

    case "arrow":
      return (
        <button className="flex items-center px-2 text-[#6B7280] hover:bg-gray-50 border-r border-[#E5E7EB] h-full">
          <IoIosArrowForward className="w-3.5 h-3.5" />
        </button>
      );

    case "toggle":
      return (
        <DataCell.Toggle
          label={item.label}
          checked={item.checked}
          onChange={(checked) => onCheckedChange?.(item.id, checked)}
        />
      );

    case "actionButton":
      return (
        <DataCell.ActionButton
          label={item.label}
          icon={item.variant === "danger" ? LuX : undefined}
          variant={item.variant as "default" | "danger" | "primary" | "support"}
          onClick={() => console.log(`${item.label} clicked`)}
        />
      );

    default:
      return null;
  }
};

export const GridFooterContent = ({
  leftItems,
  rightItems,
}: {
  leftItems: FooterItem[];
  rightItems: FooterItem[];
}) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({});

  const handleActiveChange = (id: string) => {
    setActiveTab(id);
  };

  const handleCheckedChange = (id: string, checked: boolean) => {
    setToggleStates((prev) => ({ ...prev, [id]: checked }));
  };

  const updatedLeftItems = leftItems.map((item) => ({
    ...item,
    isActive: item.type === "tab" ? item.id === activeTab : item.isActive,
  }));

  const updatedRightItems = rightItems.map((item) => ({
    ...item,
    checked:
      item.type === "toggle"
        ? toggleStates[item.id] ?? item.checked
        : item.checked,
  }));

  return (
    <DataCell className="justify-between w-full h-full">
      {/* Left Section */}
      <DataCell.Row gap={2} className="h-full">
        {updatedLeftItems.map((item) => (
          <FooterCellRenderer
            key={item.id}
            item={item}
            onActiveChange={handleActiveChange}
            onCheckedChange={handleCheckedChange}
          />
        ))}
      </DataCell.Row>

      {/* Right Section */}
      <DataCell.Row gap={2} className="pr-1">
        {updatedRightItems.map((item) => (
          <FooterCellRenderer
            key={item.id}
            item={item}
            onActiveChange={handleActiveChange}
            onCheckedChange={handleCheckedChange}
          />
        ))}
      </DataCell.Row>
    </DataCell>
  );
};

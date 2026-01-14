import { LeadData } from "@/types/table";
import { createColumnHelper } from "@tanstack/react-table";
import { DataCell } from "../data-cell/DataCell";
import { FiExternalLink, FiUser, FiUsers } from "react-icons/fi";
import { LuBuilding2, LuCalendarPlus } from "react-icons/lu";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";

const columnHelper = createColumnHelper<LeadData>();

export const dynamicColumns = [
  columnHelper.accessor("user", {
    header: () => (
      <DataCell>
        <DataCell.Row gap={3} className="justify-center">
          <DataCell.StackedIcons>
            <DataCell.StackedIcon icon={FiUser} iconColor="text-[#347FA9]" />
            <DataCell.StackedIcon
              icon={LuBuilding2}
              iconColor="text-[#438361]"
              position="overlay"
            />
          </DataCell.StackedIcons>
          <DataCell.Text
            text="Imported Data"
            className="text-[#374151] text-xs font-medium"
          />
        </DataCell.Row>
      </DataCell>
    ),
    cell: ({ getValue }) => {
      const user = getValue();
      return (
        <DataCell>
          <DataCell.Dropdown className="bg-[#E7F3F8]">
            <DataCell.Row>
              <DataCell.Icon
                icon={FiUsers}
                className="text-[#347FA9] w-3 h-3"
              />
              <DataCell.Text text={user.name} />
            </DataCell.Row>
          </DataCell.Dropdown>
        </DataCell>
      );
    },
  }),

  columnHelper.accessor("lastUpdated", {
    header: () => (
      <DataCell>
        <DataCell.Row>
          <DataCell.Icon icon={LuCalendarPlus} className="text-[#6B7280]" />
          <DataCell.Text
            text="Last Updated At"
            className="text-xs font-medium"
          />
        </DataCell.Row>
      </DataCell>
    ),
    cell: ({ getValue }) => (
      <DataCell>
        <DataCell.Text text={getValue()} />
      </DataCell>
    ),
  }),

  columnHelper.accessor("company", {
    header: () => (
      <DataCell>
        <DataCell.Row className="justify-center">
          <Image src="/font.svg" alt="font" width={16} height={16} />
          <DataCell.Text
            text="Company Name"
            className="text-xs font-medium text-[#374151]"
          />
        </DataCell.Row>
      </DataCell>
    ),
    cell: ({ getValue }) => {
      const company = getValue();
      return (
        <DataCell>
          <DataCell.Row>
            <DataCell.Icon
              icon={company.logo}
              className="text-[#6B7280] w-3.75 h-3.75"
            />
            <DataCell.Text
              text={company.name}
              className="text-gray-900 font-medium"
            />
          </DataCell.Row>
        </DataCell>
      );
    },
  }),

  columnHelper.accessor("linkedInUrl", {
    header: () => (
      <DataCell>
        <DataCell.Row className="justify-center">
          <Image src="/font.svg" alt="font" width={16} height={16} />
          <DataCell.Text
            text="LinkedIn Job URL"
            className="text-xs font-medium text-[#374151]"
          />
        </DataCell.Row>
      </DataCell>
    ),
    cell: ({ getValue }) => (
      <DataCell>
        <DataCell.Link url={getValue()} icon={FiExternalLink} />
      </DataCell>
    ),
  }),

  columnHelper.accessor("company.website", {
    header: () => (
      <DataCell>
        <DataCell.Row className="justify-center">
          <Image src="/font.svg" alt="font" width={16} height={16} />
          <DataCell.Text
            text="Company Website"
            className="text-xs font-medium text-[#374151]"
          />
        </DataCell.Row>
      </DataCell>
    ),
    cell: ({ getValue }) => (
      <DataCell>
        <DataCell.Link url={getValue()} icon={FiExternalLink} />
      </DataCell>
    ),
  }),

  columnHelper.accessor("emailStatus", {
    header: () => (
      <DataCell>
        <DataCell.Row>
          <DataCell.Icon
            icon={HiOutlineMail}
            className="text-[#6B7280] w-3.75 h-3.75"
          />
          <DataCell.Text
            text="Email Status"
            className="text-xs font-medium text-[#374151]"
          />
        </DataCell.Row>
      </DataCell>
    ),
    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <DataCell>
          {value === "Found" ? (
            <DataCell.Dropdown className="bg-[#F3F4F6]">
              <DataCell.Row>
                <DataCell.Text
                  text={`✅ Email Found`}
                  className="text-xs text-[#374151] font-medium"
                />
              </DataCell.Row>
            </DataCell.Dropdown>
          ) : (
            <DataCell.Text
              text="Run condition not met"
              className="text-[#C27803] italic text-xs pl-4 font-medium"
            />
          )}
        </DataCell>
      );
    },
  }),

  // Additional alphabet-based columns for horizontal scrolling
  columnHelper.display({
    id: "resultA",
    header: () => (
      <DataCell>
        <DataCell.Row className="justify-center">
          <Image src="/font.svg" alt="font" width={16} height={16} />
          <DataCell.Text
            text="Result A"
            className="text-xs font-medium text-[#374151]"
          />
        </DataCell.Row>
      </DataCell>
    ),
    cell: () => (
      <DataCell>
        <DataCell.Text text="—" className="text-[#9CA3AF]" />
      </DataCell>
    ),
  }),

  columnHelper.display({
    id: "resultB",
    header: () => (
      <DataCell>
        <DataCell.Row className="justify-center">
          <Image src="/font.svg" alt="font" width={16} height={16} />
          <DataCell.Text
            text="Result B"
            className="text-xs font-medium text-[#374151]"
          />
        </DataCell.Row>
      </DataCell>
    ),
    cell: () => (
      <DataCell>
        <DataCell.Text text="—" className="text-[#9CA3AF]" />
      </DataCell>
    ),
  }),

  columnHelper.display({
    id: "resultC",
    header: () => (
      <DataCell>
        <DataCell.Row className="justify-center">
          <Image src="/font.svg" alt="font" width={16} height={16} />
          <DataCell.Text
            text="Result C"
            className="text-xs font-medium text-[#374151]"
          />
        </DataCell.Row>
      </DataCell>
    ),
    cell: () => (
      <DataCell>
        <DataCell.Text text="—" className="text-[#9CA3AF]" />
      </DataCell>
    ),
  }),

  columnHelper.display({
    id: "resultD",
    header: () => (
      <DataCell>
        <DataCell.Row className="justify-center">
          <Image src="/font.svg" alt="font" width={16} height={16} />
          <DataCell.Text
            text="Result D"
            className="text-xs font-medium text-[#374151]"
          />
        </DataCell.Row>
      </DataCell>
    ),
    cell: () => (
      <DataCell>
        <DataCell.Text text="—" className="text-[#9CA3AF]" />
      </DataCell>
    ),
  }),

  columnHelper.display({
    id: "resultE",
    header: () => (
      <DataCell>
        <DataCell.Row className="justify-center">
          <Image src="/font.svg" alt="font" width={16} height={16} />
          <DataCell.Text
            text="Result E"
            className="text-xs font-medium text-[#374151]"
          />
        </DataCell.Row>
      </DataCell>
    ),
    cell: () => (
      <DataCell>
        <DataCell.Text text="—" className="text-[#9CA3AF]" />
      </DataCell>
    ),
  }),

  columnHelper.display({
    id: "resultF",
    header: () => (
      <DataCell>
        <DataCell.Row className="justify-center">
          <Image src="/font.svg" alt="font" width={16} height={16} />
          <DataCell.Text
            text="Result F"
            className="text-xs font-medium text-[#374151]"
          />
        </DataCell.Row>
      </DataCell>
    ),
    cell: () => (
      <DataCell>
        <DataCell.Text text="—" className="text-[#9CA3AF]" />
      </DataCell>
    ),
  }),

  columnHelper.display({
    id: "resultG",
    header: () => (
      <DataCell>
        <DataCell.Row className="justify-center">
          <Image src="/font.svg" alt="font" width={16} height={16} />
          <DataCell.Text
            text="Result G"
            className="text-xs font-medium text-[#374151]"
          />
        </DataCell.Row>
      </DataCell>
    ),
    cell: () => (
      <DataCell>
        <DataCell.Text text="—" className="text-[#9CA3AF]" />
      </DataCell>
    ),
  }),

  columnHelper.display({
    id: "resultH",
    header: () => (
      <DataCell>
        <DataCell.Row className="justify-center">
          <Image src="/font.svg" alt="font" width={16} height={16} />
          <DataCell.Text
            text="Result H"
            className="text-xs font-medium text-[#374151]"
          />
        </DataCell.Row>
      </DataCell>
    ),
    cell: () => (
      <DataCell>
        <DataCell.Text text="—" className="text-[#9CA3AF]" />
      </DataCell>
    ),
  }),

  columnHelper.display({
    id: "resultI",
    header: () => (
      <DataCell>
        <DataCell.Row className="justify-center">
          <Image src="/font.svg" alt="font" width={16} height={16} />
          <DataCell.Text
            text="Result I"
            className="text-xs font-medium text-[#374151]"
          />
        </DataCell.Row>
      </DataCell>
    ),
    cell: () => (
      <DataCell>
        <DataCell.Text text="—" className="text-[#9CA3AF]" />
      </DataCell>
    ),
  }),

  columnHelper.display({
    id: "resultJ",
    header: () => (
      <DataCell>
        <DataCell.Row className="justify-center">
          <Image src="/font.svg" alt="font" width={16} height={16} />
          <DataCell.Text
            text="Result J"
            className="text-xs font-medium text-[#374151]"
          />
        </DataCell.Row>
      </DataCell>
    ),
    cell: () => (
      <DataCell>
        <DataCell.Text text="—" className="text-[#9CA3AF]" />
      </DataCell>
    ),
  }),
];

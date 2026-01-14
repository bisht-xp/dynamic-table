import { LeadData, FooterItem } from "@/types/table";
import {
  MOCK_LEADS,
  FOOTER_LEFT_ITEMS,
  FOOTER_RIGHT_ITEMS,
} from "./table-data";
import { dynamicColumns } from "@/app/components/table-component/DynamicCell";
import { ColumnDef } from "@tanstack/react-table";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let columnsPromise: Promise<ColumnDef<LeadData, unknown>[]> | null = null;
let dataPromise: Promise<LeadData[]> | null = null;
let footerPromise: Promise<{
  leftItems: FooterItem[];
  rightItems: FooterItem[];
}> | null = null;

export const fetchTableColumns = (): Promise<
  ColumnDef<LeadData, unknown>[]
> => {
  if (!columnsPromise) {
    columnsPromise = delay(100).then(
      () => dynamicColumns as ColumnDef<LeadData, unknown>[]
    );
  }
  return columnsPromise;
};

export const fetchTableData = (): Promise<LeadData[]> => {
  if (!dataPromise) {
    dataPromise = delay(300).then(() => MOCK_LEADS);
  }
  return dataPromise;
};

export const fetchFooterData = (): Promise<{
  leftItems: FooterItem[];
  rightItems: FooterItem[];
}> => {
  if (!footerPromise) {
    footerPromise = delay(200).then(() => ({
      leftItems: FOOTER_LEFT_ITEMS,
      rightItems: FOOTER_RIGHT_ITEMS,
    }));
  }
  return footerPromise;
};

export const resetCache = () => {
  columnsPromise = null;
  dataPromise = null;
  footerPromise = null;
};

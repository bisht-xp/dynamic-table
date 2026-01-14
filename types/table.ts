import { IconType } from "react-icons";

export type EmailStatus = "Found" | "Not Met" | "Searching";

export interface LeadData {
  id: string;
  user: {
    name: string;
    avatarColor: string;
  };
  lastUpdated: string;
  company: {
    name: string;
    website: string;
    logo: IconType;
  };
  linkedInUrl: string;
  emailStatus: EmailStatus;
}

export type FooterItemType =
  | "addButton"
  | "tag"
  | "tab"
  | "toggle"
  | "actionButton"
  | "arrow";

export interface FooterItem {
  id: string;
  type: FooterItemType;
  label: string;
  icon?: IconType;
  variant?:
    | "default"
    | "warning"
    | "success"
    | "info"
    | "danger"
    | "primary"
    | "support";
  isActive?: boolean;
  checked?: boolean;
}

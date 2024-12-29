import { ReactNode } from "react";

export type TQueryParam = {
  name: string;
  value: boolean | React.Key | string;
};

export type IMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

export type TSidebarItem =
  | {
      key: string | undefined;
      label: ReactNode;
      children?: TSidebarItem[];
    }
  | undefined;

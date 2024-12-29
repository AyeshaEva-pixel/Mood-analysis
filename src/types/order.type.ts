import { Dispatch } from "react";
import { TUsers } from "./user.type";

export type TOrderItem = {
  name: string;
  unitPrice: number;
  quantity: number;
  itemTotalPrice: number;
};

export type TOrderFormValues = {
  _id: string;
  seller: TUsers;
  location: string;
  shopName: string;
  shopOwnerName: string;
  contact: string;
  address: string;
  deliveryDate: string;
  items: TOrderItem[];
  grandTotalPrice: number;
  advancedPrice: number;
  duePrice: number;
  lastDue: number;
  totalPrice: number;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TOrderUpdateParams = {
  updateModalOpen: boolean;
  setUpdateModalOpen: Dispatch<React.SetStateAction<boolean>>;
  orderData: TOrderFormValues;
};
export type TOrderInvoiceParams = {
  invoiceModalOpen: boolean;
  setInvoiceModalOpen: Dispatch<React.SetStateAction<boolean>>;
  orderData: TOrderFormValues;
};

import { Dispatch } from "react";

export type TUsers = {
  _id: string;
  name: string;
  photo: string;
  email: string;
  password?: string;
  role: "admin" | "seller";
};
export type TUsersData = {
  updateModalOpen: boolean;
  setUpdateModalOpen: Dispatch<React.SetStateAction<boolean>>;
  profileData: TUsers;
};

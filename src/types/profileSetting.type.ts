import { Dispatch } from "react";

export type TProfile = {
  _id: string;
  name: string;
  email: string;
  photo: string;
};
export type TUpdateProfile = {
  updateModalOpen: boolean;
  setUpdateModalOpen: Dispatch<React.SetStateAction<boolean>>;
  profileData: TProfile;
};

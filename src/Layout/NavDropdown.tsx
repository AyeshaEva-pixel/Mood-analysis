import { Dropdown, Image, MenuProps, Skeleton } from "antd";
import { useState } from "react";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../redux/features/user/userApi";

const NavDropDown = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { data, isLoading } = useGetUserQuery(undefined);
  const user = data?.data;
  const navigate = useNavigate();

  // const isLoading = true;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDropdownVisibleChange = (visible: any) => {
    setDropdownVisible(visible);
  };

  const handelLogOut = async () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <div className="p-2 flex items-center ">
          <Image
            src={user?.photo}
            width={40}
            height={40}
            alt="Profile"
            className="w-[40px] h-[40px] object-cover rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-sm text-primary font-semibold">{user?.name}</h2>
            <p className="text-sm whitespace-normal text-wrap break-words ">
              {user?.email}
            </p>
          </div>
        </div>
      ),
      key: "profile",
    },
    {
      type: "divider",
    },
    {
      label: (
        <h2
          onClick={() => handelLogOut()}
          className="p-2 flex items-center gap-2 text-base text-secondary !w-[235px]"
        >
          <FiLogOut className="text-secondary pt-[1px] w-[1.1rem] h-[1.1rem]" />{" "}
          Logout
        </h2>
      ),
      key: "logout",
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center !pt-10">
        <Skeleton.Avatar
          active
          size={32}
          shape="circle"
          className="mr-3 pb-2"
        />
        <Skeleton.Input active size="small" style={{ width: 100 }} />
      </div>
    );
  }

  return (
    <Dropdown
      open={dropdownVisible}
      onOpenChange={handleDropdownVisibleChange}
      menu={{ items }}
      trigger={["click"]}
    >
      <a className="" onClick={(e) => e.preventDefault()}>
        <div className="flex items-center justify-end">
          <Image
            src={user?.photo}
            alt="Profile"
            preview={false}
            width={32}
            height={32}
            className="w-[32px] h-[32px] object-cover rounded-full mr-4"
          />
          <h2 className="text-sm font-semibold text-primary mx-2">
            {user?.name}
          </h2>
          {dropdownVisible ? (
            <LiaAngleUpSolid className="w-4 h-4 text-secondary" />
          ) : (
            <LiaAngleDownSolid className="w-4 h-4 text-secondary" />
          )}
        </div>
      </a>
    </Dropdown>
  );
};

export default NavDropDown;

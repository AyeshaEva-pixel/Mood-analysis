/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu, Layout } from "antd";
import { getUserInfo } from "../utils/localStorageAuthManagemet";
import { verifyToken } from "../utils/verifyToken";
import sidebarItemsGenerator from "../utils/sidebarItemsGenerator";
import { adminPaths } from "../routes/admin.routes";
import { sellerPaths } from "../routes/seller.routes";
import { Link } from "react-router-dom";
import logoIcon from "../assets/image/okobiscuitLoog.png";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  SUPPER_ADMIN: "superAdmin",
  SELLER: "seller",
};

const Sidebar = () => {
  const token = getUserInfo();

  let user;

  if (token) {
    user = verifyToken(token);
  }
  let sidebarItems: any = [];

  switch (user?.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.SUPPER_ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.SUPPER_ADMIN);
      break;
    case userRole.SELLER:
      sidebarItems = sidebarItemsGenerator(sellerPaths, userRole.SELLER);
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      theme="light"
      collapsedWidth="0"
      style={{
        height: "100vh",
        position: "sticky",
        top: "0",
        left: "0",
        overflow: "auto",
        scrollbarWidth: "revert",
      }}
      className="customScroll"
      width={250}

      // collapsible
    >
      <Link to="/dashboard">
        <div className="flex items-center justify-center md:justify-start md:ml-7 gap-1.5 cursor-pointer py-2">
          <img className="w-[52px]" src={logoIcon} alt="logo" />
          <div className="text-xl leading-[1em] italic font-extrabold">
            <h2 className="text-primary">Oko</h2>
            <h3 className="text-secondary">Biscuit</h3>
          </div>
        </div>
      </Link>

      <Menu
        mode="inline"
        theme="light"
        // defaultSelectedKeys={["1", "all-orders", "add-order", "4", "5"]}
        // defaultOpenKeys={["All Orders", "add-order"]}
        items={sidebarItems}
        className="[&_li:hover]:!text-primary [&_li:hover>div]:!text-primary *:font-medium"
      />
    </Sider>
  );
};

export default Sidebar;

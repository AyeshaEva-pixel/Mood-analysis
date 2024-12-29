import { BiMessageSquareAdd, BiSolidDashboard } from "react-icons/bi";
import { FaBlog } from "react-icons/fa6";
import { GrChapterAdd, GrVirtualMachine } from "react-icons/gr";
import {
  TbCategory,
  TbCategoryPlus,
  TbOctahedron,
  TbOctahedronPlus,
} from "react-icons/tb";

import { Link } from "react-router-dom";

export const sidebarItems = [
  {
    key: 1,
    icon: <BiSolidDashboard />,
    label: <Link to={"/"}>Dashboard</Link>,
  },

  {
    key: 5,
    icon: <GrVirtualMachine />,
    label: <Link to={"/all-products"}>All Products</Link>,
    children: [
      {
        key: 51,
        icon: <GrChapterAdd />,
        label: <Link to={"/add-product"}>Add Product</Link>,
      },
    ],
  },
  {
    key: 3,
    icon: <FaBlog />,
    label: <Link to={"/all-blogs"}>All Blogs</Link>,
    children: [
      {
        key: 31,
        icon: <BiMessageSquareAdd />,
        label: <Link to={"/add-blog"}>Add Blog</Link>,
      },
    ],
  },
  {
    key: 4,
    icon: <TbCategory />,
    label: <Link to={"/all-category"}>All Categorys</Link>,
    children: [
      {
        key: 41,
        icon: <TbCategoryPlus />,
        label: <Link to={"/add-category"}>Add Category</Link>,
      },
    ],
  },
  {
    key: 6,
    icon: <TbOctahedron />,
    label: <Link to={"/all-career"}>All Career</Link>,
    children: [
      {
        key: 61,
        icon: <TbOctahedronPlus />,
        label: <Link to={"/add-career"}>Add Career</Link>,
      },
    ],
  },
];

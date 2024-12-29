// import EmployeeDetailsPage from "../pages/Employee/EmployeeDetails";
// import InvoicePage from "../pages/Invoice/Invoice";
import Home from "../pages/Home/Home";
import AddOrder from "../pages/Orders/AddOrder";
import AllOrder from "../pages/Orders/AllOrder";
import Settings from "../pages/Settings/Settings";

export const sellerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Home />,
  },
  // {
  //   name: "Order",
  //   children: [
  //     {
  //       name: "All Orders",
  //       path: "order",
  //       element: <EmployeeDetailsPage />,
  //     },
  //     {
  //       name: "Invoice",
  //       path: "invoice",
  //       element: <InvoicePage />,
  //     },
  //   ],
  // },
  {
    name: "Order",
    children: [
      {
        name: "All Orders",
        path: "all-orders",
        element: <AllOrder />,
      },
      {
        name: "Add Order",
        path: "add-order",
        element: <AddOrder />,
      },
    ],
  },
  {
    name: "Settings",
    path: "settings",
    element: <Settings />,
  },
];

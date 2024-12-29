/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Button,
  Divider,
  Table,
  DatePicker,
  TableColumnsType,
  Input,
  Popconfirm,
} from "antd";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "sonner";
import { TOrderFormValues } from "../../types/order.type";
import SynerPagination from "../../utils/Pagination/pagination";
import {
  useDeleteOrderMutation,
  useGetAllOrderQuery,
} from "../../redux/features/order/orderApi";
import { handlePrint } from "./Orders.constant";

const AllOrderList = () => {
  const [params, setParams] = useState<Record<string, unknown>[]>([
    { name: "limit", value: 10 },
  ]);
  const { data, isLoading } = useGetAllOrderQuery(params);

  const [deleteOrder] = useDeleteOrderMutation();
  // const [updateModalOpen, setUpdateModalOpen] = useState(false);
  // const [orderData, setOrderData] = useState<TOrderFormValues | null>(null);
  // const [invoiceModalOpen, setInvoiceModalOpen] = useState(false);
  // const [orderData, setOrderData] = useState<TOrderFormValues | null>(null);
  // const handleUpdateOrder = (order: TOrderFormValues) => {
  //   setUpdateModalOpen(true);
  //   setOrderData(order);
  // };
  // const showInvoice = (order: TOrderFormValues) => {
  //   setOrderData(order);
  //   setInvoiceModalOpen(true);
  // };

  const handleDeleteOrder = async (id: string) => {
    const toastId = toast.loading("Deleting order...");
    try {
      const res = await deleteOrder(id).unwrap();
      if (res?.success) {
        toast.success("Order deleted successfully", { id: toastId });
      }
    } catch (error: any) {
      console.log("error for deleing--=>", error);

      toast.error(error.message || "Failed to delete order", { id: toastId });
    }
  };

  const columns: TableColumnsType<TOrderFormValues> = [
    {
      title: "SL",
      width: 50,
      align: "center",
      render: (_: any, __: TOrderFormValues, index: number) => (
        <p>{index + 1}</p>
      ),
    },
    {
      title: "Shop Name",
      dataIndex: "shopName",
    },
    {
      title: "Owner Name",
      dataIndex: "shopOwnerName",
    },
    {
      title: "Contact",
      dataIndex: "contact",
    },

    {
      title: "Grand Total Price",
      dataIndex: "grandTotalPrice",
      // render: (price: number) => <p>{price}</p>,
      width: 150,
    },
    {
      title: "Advanced Price",
      dataIndex: "advancedPrice",
      width: 150,
    },
    {
      title: "Old Due",
      dataIndex: "duePrice",
      width: 150,
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      width: 150,
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      fixed: "right",
      width: 200, // Adjusted width to fit the new button
      render: (_, record: TOrderFormValues) => (
        <div className="flex justify-center gap-2">
          {/* <Button onClick={() => handleUpdateOrder(record)}>Update</Button> */}
          <Popconfirm
            title="Delete this order?"
            onConfirm={() => handleDeleteOrder(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button>
              <AiFillDelete fontSize={16} />
            </Button>
          </Popconfirm>
          <Button onClick={() => handlePrint(record)}>Print</Button>{" "}
        </div>
      ),
    },
  ];

  const handlePaginationChange = (page: number) => {
    setParams((prevParams) => [
      ...prevParams.filter((param) => param.name !== "page"),
      { name: "page", value: page },
      { name: "limit", value: 10 },
    ]);
  };

  const getDate = (_dates: any, dateString: any) => {
    if (dateString) {
      setParams([{ name: "deliveryDate", value: dateString }]);
    } else {
      setParams([
        { name: "page", value: 1 },
        { name: "limit", value: 10 },
      ]);
    }
  };

  const meta = data?.data?.meta;
  const result = data?.data?.result;

  return (
    <>
      <div className="flex items-center gap-5 mb-5">
        <div className="grow">
          <Divider orientation="left" className="!my-0 !text-xl !text-primary">
            All Orders
          </Divider>
        </div>
        <div className="flex gap-2 items-center ">
          <DatePicker
            className="md:w-[250px]"
            format="YYYY-MM-DD"
            onChange={getDate}
          />
          <div className="w-[250px]">
            <Input
              type="text"
              placeholder="Search"
              onChange={(e: any) =>
                setParams([
                  { name: "searchTerm", value: e.target.value },
                  { name: "limit", value: 10 },
                ])
              }
            />
          </div>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={result}
        pagination={false}
        loading={isLoading}
      />
      <SynerPagination
        meta={meta}
        handlePaginationChange={handlePaginationChange}
      />
      {/* {orderData && (
        <OrderInvoice
          invoiceModalOpen={invoiceModalOpen}
          setInvoiceModalOpen={setInvoiceModalOpen}
          orderData={orderData}
        />
      )} */}
      {/* {orderData && (
        <UpdateOrder
          updateModalOpen={updateModalOpen}
          setUpdateModalOpen={setUpdateModalOpen}
          orderData={orderData}
        />
      )} */}
    </>
  );
};

export default AllOrderList;

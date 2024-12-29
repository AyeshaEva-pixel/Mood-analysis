/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Form,
  Input,
  InputNumber,
  Divider,
  Row,
  Col,
  DatePicker,
} from "antd";
import { toast } from "sonner";
import { TOrderFormValues, TOrderItem } from "../../types/order.type";
import { useAddOrderMutation } from "../../redux/features/order/orderApi";
import { MinusCircleOutlined } from "@ant-design/icons";
import { format } from "date-fns";

const ProductAddForm = () => {
  const [form] = Form.useForm();
  const [addOrder, { isLoading }] = useAddOrderMutation();

  // Function to calculate total, due, and advanced prices dynamically
  const calculateSummary = (
    items: TOrderItem[],
    advancedPrice: number,
    duePrice: number
  ) => {
    const grandTotalPrice = items.reduce(
      (sum, item) => sum + (item.unitPrice || 0) * (item.quantity || 0),
      0
    );
    // Add duePrice to the final due price instead of subtracting it
    const totalPrice = grandTotalPrice - advancedPrice + duePrice;
    return { grandTotalPrice, totalPrice };
  };

  // Handle form value changes
  const handleFormChange = (
    _changedValues: any,
    allValues: TOrderFormValues
  ) => {
    const { items = [], advancedPrice = 0, duePrice = 0 } = allValues;

    // Update itemTotalPrice for each item
    const updatedItems = items.map((item: TOrderItem) => {
      const itemTotalPrice = (item.unitPrice || 0) * (item.quantity || 0);
      return { ...item, itemTotalPrice };
    });

    // Calculate grand total and due price
    const { grandTotalPrice, totalPrice } = calculateSummary(
      updatedItems,
      advancedPrice,
      duePrice
    );

    // Set calculated fields back into the form
    form.setFieldsValue({
      items: updatedItems,
      grandTotalPrice,
      totalPrice,
    });
  };

  const onFinish = async (values: TOrderFormValues) => {
    const toastId = toast.loading("Adding Order...");
    try {
      // Format the date
      if (values.deliveryDate) {
        values.deliveryDate = format(
          new Date(values.deliveryDate),
          "yyyy-MM-dd"
        );
      }
      const res = await addOrder(values).unwrap();

      if (res?.success) {
        toast.success("Order added successfully!", { id: toastId });
        form.resetFields();
      }
    } catch (error: any) {
      toast.error(`${error.message || "Failed to add order!"}`, {
        id: toastId,
      });
    }
  };

  return (
    <div className="container">
      <Divider orientation="center" className="!text-base">
        Add New Order
      </Divider>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onValuesChange={handleFormChange}
        initialValues={{
          grandTotalPrice: 0,
          advancedPrice: 0,
          duePrice: 0,
          totalPrice: 0,
          items: [{}],
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Shop Name"
              name="shopName"
              rules={[{ required: true, message: "Shop name is required" }]}
            >
              <Input placeholder="Enter shop name" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Shop Owner Name"
              name="shopOwnerName"
              rules={[
                { required: true, message: "Shop owner name is required" },
              ]}
            >
              <Input placeholder="Enter shop owner's name" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Location"
              name="location"
              rules={[{ required: true, message: "Location is required" }]}
            >
              <Input placeholder="Enter location" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Contact"
              name="contact"
              rules={[
                { required: true, message: "Contact number is required" },
              ]}
            >
              <Input placeholder="Enter contact number" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Address is required" }]}
            >
              <Input placeholder="Enter address" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Delivery Date"
              name="deliveryDate"
              rules={[{ required: true, message: "Delivery date is required" }]}
            >
              <DatePicker
                className="w-full"
                placeholder="Enter delivery date"
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Order Items using Form.List */}
        <Divider>Items</Divider>
        <Form.List name="items">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Row gutter={16} key={field.key} className="mb-3">
                  <Col span={6}>
                    <Form.Item
                      {...field}
                      label="Item Name"
                      name={[field.name, "name"]}
                      rules={[
                        { required: true, message: "Item name is required" },
                      ]}
                    >
                      <Input placeholder="Enter item name" />
                    </Form.Item>
                  </Col>

                  <Col span={4}>
                    <Form.Item
                      {...field}
                      label="Unit Price"
                      name={[field.name, "unitPrice"]}
                      rules={[
                        { required: true, message: "Unit price is required" },
                      ]}
                    >
                      <InputNumber
                        min={1}
                        placeholder="Unit Price"
                        onChange={() => form.validateFields()}
                      />
                    </Form.Item>
                  </Col>

                  <Col span={4}>
                    <Form.Item
                      {...field}
                      label="Quantity"
                      name={[field.name, "quantity"]}
                      rules={[
                        { required: true, message: "Quantity is required" },
                      ]}
                    >
                      <InputNumber
                        min={1}
                        placeholder="Quantity"
                        onChange={() => form.validateFields()}
                      />
                    </Form.Item>
                  </Col>

                  <Col span={4}>
                    <Form.Item
                      //   {...field}
                      label="Item Total"
                      //   name={[field.name, "ItemTotalPrice"]}
                      shouldUpdate
                    >
                      {() => {
                        const unitPrice =
                          form.getFieldValue(["items", index, "unitPrice"]) ||
                          0;
                        const quantity =
                          form.getFieldValue(["items", index, "quantity"]) || 0;
                        const itemTotal = unitPrice * quantity;
                        return <InputNumber disabled value={itemTotal} />;
                      }}
                    </Form.Item>
                  </Col>

                  <Col span={4}>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        style={{ marginLeft: 8, color: "red", marginTop: 40 }}
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Col>
                </Row>
              ))}

              <Button type="dashed" onClick={() => add()} block>
                Add Item
              </Button>
            </>
          )}
        </Form.List>

        <Divider>Order Summary</Divider>

        <Row gutter={16}>
          <Col span={6}>
            <Form.Item label="Grand Total Price" name="grandTotalPrice">
              <InputNumber disabled placeholder="Grand Total" />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item
              label="Advanced Price"
              name="advancedPrice"
              rules={[
                { required: true, message: "Advanced price is required" },
              ]}
            >
              <InputNumber min={0} placeholder="Enter advanced price" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Old due"
              name="duePrice"
              rules={[{ required: true, message: "Old Due is required" }]}
            >
              <InputNumber min={0} placeholder="Enter Old Due" />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Total Price" name="totalPrice">
              <InputNumber disabled placeholder="Total Price" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <div className="text-right mt-2">
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Submit Order
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductAddForm;

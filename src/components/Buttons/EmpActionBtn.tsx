/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Col,
  DatePicker,
  DatePickerProps,
  Divider,
  Form,
  Input,
  Modal,
  Row,
} from "antd";
import { toast } from "sonner";
import ItemsList from "../Invoice/ItemsList";

const EmpActionBtn = () => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [form] = Form.useForm();

  const onSubmit = async (values: any) => {
    const toastId = toast.loading("Updating product...");

    console.log("clicked button");
    console.log(toastId);
    console.log(values);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
      <button
        onClick={() => setUpdateModalOpen(true)}
        className="py-3 px-6 bg-primary hover:bg-primary/90 hover:shadow-[3px_3px_5px_0px] hover:shadow-accent/30 rounded-xl text-base transition-all duration-300"
      >
        Add New Order
      </button>
      <Modal
        // title={null}
        centered
        open={updateModalOpen}
        onOk={() => setUpdateModalOpen(false)}
        onCancel={() => setUpdateModalOpen(false)}
        width={1000}
        // footer={null}
        okText="Add New Order"
      >
        <div className="grid grid-cols-2 items-end mb-5">
          <div className="text-left">
            <h2 className="text-secondary text-2xl leading-[1em] font-semibold">
              Invoice
            </h2>
            <Divider
              plain
              className="!my-0"
              orientation="left"
              orientationMargin={0}
            >
              Add New Order
            </Divider>
          </div>
          <div className="text-right mr-8">
            <p className="pb-1 font-medium text-sm">Delivery Date</p>
            <DatePicker
              onChange={onChange}
              size={"small"}
              placement="bottomRight"
            />
          </div>
        </div>

        <Form
          form={form}
          //   initialValues={productData}
          onFinish={onSubmit}
          requiredMark={false}
          layout="vertical"
        >
          <Row gutter={20} className="mb-3">
            <Col span={24}>
              <Form.Item
                label="Shop Owner Name"
                name="shipOwner"
                className="!mb-0 [&_.ant-form-item-label]:!pb-0.5"
                rules={[
                  { required: true, message: "Shop Owner Name is required" },
                ]}
              >
                <Input
                  type="text"
                  autoComplete="off"
                  placeholder="Write here..."
                  className="h-8 border border-accent/25 !rounded-lg"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={20} className="mb-3">
            <Col span={24} md={{ span: 12 }}>
              <Form.Item
                label="Shop Name"
                name="shopName"
                className="!mb-0 [&_.ant-form-item-label]:!pb-0.5"
                rules={[{ required: true, message: "Shop Name is required" }]}
              >
                <Input
                  type="text"
                  autoComplete="off"
                  placeholder="Write here..."
                  className="h-8 border border-accent/25 !rounded-lg"
                />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }}>
              <Form.Item
                label="Contact No"
                name="contactNo"
                className="!mb-0 [&_.ant-form-item-label]:!pb-0.5"
                rules={[{ required: true, message: "Contact No is required" }]}
              >
                <Input
                  type="text"
                  autoComplete="off"
                  placeholder="Write here..."
                  className="h-8 border border-accent/25 !rounded-lg"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={20} className="mb-3">
            <Col span={24}>
              <Form.Item
                label="Shop Owner Name"
                name="shopOwner"
                className="!mb-0 [&_.ant-form-item-label]:!pb-0.5"
                rules={[
                  { required: true, message: "Shop Owner Name is required" },
                ]}
              >
                <Input.TextArea
                  placeholder="Write here..."
                  className="border border-accent/25 !rounded-lg"
                  rows={2}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row
            gutter={10}
            className="mb-2 bg-primary py-1.5 px-3 rounded-se-full rounded-bl-full text-center [&_p]:text-sm [&_p]:font-semibold"
          >
            <Col span={2}>
              <p>SL</p>
            </Col>
            <Col span={11}>
              <p className="text-left">Product Name</p>
            </Col>
            <Col span={4}>
              <p>Unit Price</p>
            </Col>
            <Col span={3}>
              <p>Quantity</p>
            </Col>
            <Col span={4}>
              <p>Total Price</p>
            </Col>
          </Row>

          {/* <Row gutter={20}>
            <Col span={24}>
              <Form.List name="itemsList">
                {(fields, { add, remove }) => (
                  <>
                    {fields?.map(({ key, name, ...restField }) => (
                      <Row
                        key={key}
                        gutter={10}
                        className="mb-1 items-center bg-secondary/10 py-1.5 px-3 rounded-lg"
                      >
                        <Col span={2}>
                          <p className="flex items-center gap-2 text-sm font-semibold">
                            <AiOutlineMinusCircle
                              className="text-red-500 text-xl cursor-pointer"
                              onClick={() => remove(name)}
                            />
                            {key + 1}
                          </p>
                        </Col>
                        <Col span={11}>
                          <Form.Item
                            {...restField}
                            name={[name, "productName"]}
                            getValueFromEvent={() => {
                              return form.getFieldValue([
                                "itemsList",
                                name,
                                "productName",
                              ]);
                            }}
                            className="!mb-0"
                            rules={[
                              {
                                required: true,
                                message: "Product Name is required",
                              },
                            ]}
                          >
                            <Input
                              type="text"
                              placeholder="Write here..."
                              className="h-8 border border-accent/25 !rounded-lg"
                            />
                          </Form.Item>
                        </Col>
                        <Col span={4}>
                          <Form.Item
                            {...restField}
                            name={[name, "unitPrice"]}
                            getValueFromEvent={() => {
                              return form.getFieldValue([
                                "itemsList",
                                name,
                                "unitPrice",
                              ]);
                            }}
                            className="!mb-0"
                            rules={[
                              {
                                required: true,
                                message: "Missing Unite Price",
                              },
                            ]}
                          >
                            <InputNumber
                              type="text"
                              placeholder="Write here..."
                              className="w-full h-8 border border-accent/25 !rounded-lg"
                            />
                          </Form.Item>
                        </Col>
                        <Col span={3}>
                          <Form.Item
                            {...restField}
                            name={[name, "quantity"]}
                            getValueFromEvent={() => {
                              return form.getFieldValue([
                                "itemsList",
                                name,
                                "quantity",
                              ]);
                            }}
                            className="!mb-0"
                            rules={[
                              {
                                required: true,
                                message: "Missing Quantity",
                              },
                            ]}
                          >
                            <InputNumber
                              type="text"
                              placeholder="Write here..."
                              className="w-full h-8 border border-accent/25 !rounded-lg"
                            />
                          </Form.Item>
                        </Col>
                        <Col span={4}>
                          <p className="text-base font-semibold text-right">
                            5000.00
                          </p>
                        </Col>
                      </Row>
                    ))}
                    <Form.Item className="!mb-0">
                      <Button
                        type="default"
                        size="large"
                        onClick={() => add()}
                        block
                        icon={<BiPlus />}
                        className="!leading-[1em]"
                      >
                        Add Item
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Col>
          </Row> */}
          <ItemsList />
          {/* <Row gutter={20} className="mb-3">
            <Col span={24}>
              <button type="submit">Add New Order</button>
            </Col>
          </Row> */}
        </Form>

        <div>
          <div className="w-64 ml-auto text-lg font-semibold my-10 *:flex *:justify-between">
            <div>
              <span>Grand Total:</span>
              <span>8800.00</span>
            </div>
            <div>
              <span>Advance:</span>
              <span>500.00</span>
            </div>
            <span className="h-[1px] bg-accent/30 my-1.5"></span>
            <div>
              <span>Due Amount:</span>
              <span>300.00</span>
            </div>
            <div>
              <span>Last Due:</span>
              <span>100.00</span>
            </div>
            <span className="h-[1px] bg-accent/30 my-1.5"></span>
            <div>
              <span>Total Amount:</span>
              <span>400.00</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EmpActionBtn;

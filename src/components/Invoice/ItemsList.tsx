/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Col, Form, Input, InputNumber, Row } from "antd";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";

const ItemsList = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <Row gutter={20}>
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
                  <span
                    onClick={() => add()}
                    className="!leading-[1em] cursor-pointer flex gap-2 items-center justify-center text-base font-medium bg-primary py-3 px-5 text-center w-full mt-2"
                  >
                    <BiPlus /> Add Item
                  </span>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Col>
      </Row>
    </div>
  );
};

export default ItemsList;

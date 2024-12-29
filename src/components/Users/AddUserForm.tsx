/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Col, Form, Input, Row, Select } from "antd";
import { TUsers } from "../../types/user.type";
import { uploadImageInCloudinary } from "../../utils/UploadImage/UploadImageInCloudinay";
import { toast } from "sonner";
import UploadImageWithPreview from "../../utils/UploadImage/UploadImageWithPreview";
import { useAddNewUserMutation } from "../../redux/features/user/userApi";

const AddUserForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<any>([]);
  const [form] = Form.useForm();
  const [addNewUser] = useAddNewUserMutation();

  const onSubmit = async (data: TUsers) => {
    const toastId = toast.loading("Adding new user...");

    let imageLink;

    // if (file.length > 0) {
    //   imageLink = await uploadImageInCloudinary(file, toastId);
    //   if (!imageLink) {
    //     return toast.error("Image upload failed! Please try again.", {
    //       id: toastId,
    //     });
    //   }
    // } 
    
    // else {
    //   return toast.error("User Image Is Required.", {
    //     id: toastId,
    //   });
    // }

    const userNewData = {
      name: data?.name,
      photo: imageLink,
      email: data?.email,
      password: data?.password,
      role: data?.role,
    };

    try {
      const res = await addNewUser(userNewData).unwrap();
      if (res?.success) {
        setIsLoading(true);
        toast.success("Successfully added the User", { id: toastId });
        // form.resetFields();
        // setFile([]);
      } else {
        toast.error("Something want wrong!", { id: toastId });
      }
    } catch (error: any) {
      toast.error("Something want wrong!", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Form
            form={form}
            onFinish={onSubmit}
            requiredMark={false}
            layout="vertical"
          >
            <Row gutter={16}>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  label="Name"
                  name="name"
                  tooltip="Here you have to input the user name."
                  rules={[{ required: true, message: "Name is required" }]}
                >
                  <Input
                    type="text"
                    autoComplete="off"
                    placeholder="Write here..."
                    className="h-10 border border-[#C4CAD4] !rounded-lg"
                  />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  label="User Role"
                  name="role"
                  tooltip="Please select the user role."
                  rules={[{ required: true, message: "User role is required" }]}
                >
                  <Select
                    placeholder="Select role"
                    className="h-10 border border-[#C4CAD4] !rounded-lg"
                  >
                    <Select.Option value="seller">Seller</Select.Option>
                    <Select.Option value="admin">Admin</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              ;
            </Row>

            <Row gutter={16}>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  tooltip="Here you have to input the user email."
                  rules={[{ required: true, message: "Email is required" }]}
                  label="Email Address"
                  name="email"
                >
                  <Input
                    type="email"
                    placeholder="Write here..."
                    className="h-10 border border-[#C4CAD4] !rounded-lg"
                  />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  label="Password"
                  name="password"
                  extra={"Provide at least 8 caracter"}
                  tooltip="Here you have to input the user password."
                  rules={[
                    { required: true, message: "Password is required", min: 8 },
                  ]}
                >
                  <Input.Password
                    type="password"
                    placeholder="********"
                    className="h-10 border border-[#C4CAD4] !rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* <Row>
              <Col span={24}>
                <p className="font-medium mb-1.5">User Image</p>

                <UploadImageWithPreview
                  setFile={setFile}
                  aspectRatio={1 / 1}
                  ratioName="oneOne"
                />
              </Col>
            </Row> */}

            <Row>
              <div className="flex items-center justify-end w-full">
                <button
                  className="cursor-pointer hover:bg-gray-950 px-4 py-1.5 bg-primary font-medium  text-white rounded-lg"
                  type="submit"
                  disabled={isLoading ? true : false}
                >
                  {isLoading ? "Loading..." : "Add User"}
                </button>
              </div>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AddUserForm;

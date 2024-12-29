/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Grid, Input, theme, Typography } from "antd";

import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { useSellerRegisterMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export default function Register() {
  const { token } = useToken();
  const screens = useBreakpoint();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [register, { isLoading }] = useSellerRegisterMutation();

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Register...");

    data.photo = "https://i.ibb.co/CtjVFXW/jahid-prof.jpg";

    try {
      const userInfo = await register(data).unwrap();

      if (userInfo.success) {
        form.resetFields();
        toast.success("Register Request Success", { id: toastId });
        navigate("/login");
      }
    } catch (error: any) {
      console.log("Error: ", error);

      if (error?.data?.message) {
        toast.error(error?.data?.message, { id: toastId });
      }
    }
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.paddingXL}px ${token.padding}px`,
      width: "380px",
    },
    forgotPassword: {
      float: "right" as const,
    },
    header: {
      marginBottom: token.marginXL,
      textAlign: "center" as const,
    },
    section: {
      alignItems: "center" as const,
      backgroundColor: token.colorBgContainer,
      display: "flex" as const,
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
    },
    signup: {
      marginTop: token.marginLG,
      textAlign: "center" as const,
      width: "100%",
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <Title style={styles.title}>Sign up</Title>
          <Text style={styles.text}>
            Join OkoBiscuit! Create an account as Seller.
          </Text>
        </div>
        <Form
          form={form}
          onFinish={onSubmit}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            extra="Password needs to be at least 8 characters."
            rules={[
              {
                required: true,
                message: "Please input your Password!",
                min: 8,
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button disabled={isLoading} block type="primary" htmlType="submit">
              {isLoading ? "Loading..." : "Sign up"}
            </Button>
            <div style={styles.signup}>
              <Text style={styles.text}>Already have an account?</Text>{" "}
              <Link href="/login">Sign in</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}

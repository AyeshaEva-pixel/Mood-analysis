/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Checkbox, Form, Grid, Input, theme, Typography } from "antd";

import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../../redux/hooks";
// import { setUser } from "../../redux/features/auth/authSlice";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import { verifyToken } from "../../utils/verifyToken";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export default function Login() {
  const { token } = useToken();
  const screens = useBreakpoint();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("login...");

    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res?.data?.accessToken);
      localStorage.setItem("accessToken", res?.data?.accessToken);
      // dispatch(setUser({ user: user, token: res?.data?.accessToken }));

      toast.success("Logged In successful!", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error: any) {
      console.log("error", error);

      toast.error(error?.data?.message || "Something went wrong!", {
        id: toastId,
      });
    }
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: "380px",
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center" as const,
      width: "100%",
    },
    forgotPassword: {
      float: "right" as const,
    },
    header: {
      marginBottom: token.marginXL,
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
      textAlign: "center" as const,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <Title style={styles.title}>Sign in</Title>
          <Text style={styles.text}>
            Welcome to OkoBiscuit! Please enter your details.
          </Text>
        </div>
        <Form
          initialValues={{
            remember: true,
            email: "superAdmin@gmail.com",
            password: "superAdmin00@11",
          }}
          form={form}
          onFinish={onSubmit}
          layout="vertical"
          requiredMark="optional"
        >
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
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a style={styles.forgotPassword} href="">
              Forgot password?
            </a>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            <div style={styles.footer}>
              <Text style={styles.text}>Don't have an account?</Text>{" "}
              <Link href="/register">Sign up now</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}

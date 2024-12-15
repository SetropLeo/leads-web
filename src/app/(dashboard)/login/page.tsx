"use client";

import { Form, Input, Button, Skeleton } from "antd";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "@/actions";
import { notify } from "@/utils";
import "./styles.css";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoadingPage(false), 200);
    return () => clearTimeout(timeout);
  }, []);

  const onFinish = async (values: { username: string; password: string }) => {
    const { username, password } = values;

    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));

      const isAuthenticated = await loginAction(username, password);

      if (isAuthenticated) {
        router.push("/dashboard");
      } else {
        notify({
          type: "error",
          message: "Login Failed",
          description: "Invalid username or password",
        });
      }
    } catch {
      notify({
        type: "error",
        message: "An error occurred",
        description: "There was an issue with the login process.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-menu">
        {isLoadingPage ? (
          <Skeleton active paragraph={{ rows: 5 }} />
        ) : (
          <>
            <div className="logo-container">
              <img src="/logo.png" alt="Logo" className="login-logo" />
            </div>
            <h2 className="login-title">Login</h2>
            <Form
              name="login"
              onFinish={onFinish}
              layout="vertical"
              className="login-form"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input size="large" className="input-field" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password size="large" className="input-field" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={loading}
                  className="login-button"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

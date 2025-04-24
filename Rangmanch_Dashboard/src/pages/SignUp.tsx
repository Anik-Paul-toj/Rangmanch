import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-box">
        <h2>Sign Up</h2>
        <Form
          name="normal_register"
          className="register-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your Email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="agreement" valuePropName="checked" noStyle>
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="register-form-button"
            >
              Register
            </Button>
            Or <Link to="/signin">login now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp; 
//tambahin header khusus log-in yang isinya cuma logo

//library import
import React from 'react';
import type { FormProps } from 'antd';
import { Checkbox, Form, Input, Layout, message, Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';

//local import
import HeaderComponent from '../feature/header/header';
import FooterComponent from '../feature/footer/footer';
import useAuth from '../hooks/authentication';
//import Button from '../components/button/button';

//variable declaration
//Input data yang bisa dilakukan
type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};

const LogIn: React.FC = () => {
  const navigate = useNavigate();
  const { logIn } = useAuth();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {

    try {
      if (values.username && values.password) {
        await logIn(values.username, values.password);
        message.success('Login successful! Redirecting...');
        navigate('/beranda'); // Navigate to the dashboard on success
      } else {
        console.error("Username or password is missing.");
      }
    } catch (error) {
      message.error("Login failed! Please check your credentials.");  //error saat user tidak ditemukan
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };

  return(
    <Layout style={{ display: 'flex', flexDirection: 'column', gap: '4rem', height: "100vh", justifyContent: "space-between" }}>
        <HeaderComponent/>
        <Content style={{display: "flex", justifyContent: "center", alignItems: "baseline"}}>
          <Layout>
              <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  style={{ maxWidth: 600 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
              >
                  <Form.Item<FieldType>
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                  <Input />
                  </Form.Item>

                  <Form.Item<FieldType>
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                  <Input.Password />
                  </Form.Item>

                  <Form.Item<FieldType>
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{ offset: 8, span: 16 }}
                  >
                  <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
              </Form>
          </Layout>
        </Content>
        <FooterComponent/>
    </Layout>
  );
};

export default LogIn;
import React from 'react';
import type { FormProps } from 'antd';
import { Checkbox, Form, Input, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import HeaderComponent from '../feature/header/header';
import Button from '../components/button/button';
import FooterComponent from '../feature/footer/footer';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const LogIn: React.FC = () => {

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
                  <Button 
                    title='Submit'
                    path="beranda"
                  />
                  </Form.Item>
              </Form>
          </Layout>
        </Content>
        <FooterComponent/>
    </Layout>
  );
};

export default LogIn;
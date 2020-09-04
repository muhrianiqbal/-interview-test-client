import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Select } from 'antd';
import { create_site } from '../store/actions';

const { Option } = Select;

function FormSite() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();

  const onFinish = async values => {
    await dispatch(create_site(values));
    history.push('/');  };

  const onReset = () => {
    form.resetFields();
  };

  return(
    <div style={{textAlign: 'center'}}>
      <h2>Create Site</h2>
      <Form {...layout} form={form} name="site" onFinish={onFinish}>
        <Form.Item name="siteName" label="Site Name" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option"
            allowClear
          >
            <Option value="Site A">Site A</Option>
            <Option value="Site B">Site B</Option>
            <Option value="Site C">Site C</Option>
            <Option value="Site D">Site D</Option>
            <Option value="Site E">Site E</Option>
          </Select>
        </Form.Item>
        <Form.Item name="address" label="Address" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};

const layout = {
  labelCol: { span: -20 },
  wrapperCol: { span: 30 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default FormSite;
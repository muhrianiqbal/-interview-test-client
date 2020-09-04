import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Button, Select, DatePicker, InputNumber } from 'antd';
import { create_deliverables } from '../store/actions';

const { Option } = Select;

function FormDeliverables() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();

  const onFinish = async values => {
    await dispatch(create_deliverables(values));
    history.push('/');
  };

  const onReset = () => {
    form.resetFields();
  };

  return(
    <div style={{textAlign: 'center'}}>
      <h2>Create Deliverables</h2>
      <Form {...layout} form={form} name="deliverables" onFinish={onFinish}>
        <Form.Item name="customerPO" label="Customer PO" rules={[{ required: true, type: 'number' }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name="siteId" label="Site ID" rules={[{ required: true, type: 'number' }]}>
          <InputNumber />
        </Form.Item>
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
        <Form.Item name="deliverablesType" label="Deliverables Types" rules={[{ required: true }]} initialValue="New Site">
          <Select
            // placeholder="Select a option and change input text above"
            // allowClear
          >
            <Option value="New Site">New Site</Option>
            <Option value="Upgrade">Upgrade</Option>
            <Option value="Finish">Finish</Option>
          </Select>
        </Form.Item>
        <Form.Item name="installationStart" label="Installation Start">
          <DatePicker />
        </Form.Item>
        <Form.Item name="installationFinish" label="Installation Finish">
          <DatePicker />
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

export default FormDeliverables;
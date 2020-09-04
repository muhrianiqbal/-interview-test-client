import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, InputNumber, Button, Select } from 'antd';
import { create_order, update_order } from '../store/actions';

const { Option } = Select;

function FormOrder(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();
  const { data } = props;

  const onFinish = async values => {
    if (data._id) {
      await dispatch(update_order(data._id, values));
    } else {
      await dispatch(create_order(values));
    }
    history.push('/');
  };

  const onReset = () => {
    form.resetFields();
  };

  return(
    <div style={{textAlign: 'center'}}>
      <h2>{data._id ? 'Update' : 'Create Customer PO'}</h2>
      <Form {...layout} form={form} name="order" onFinish={onFinish}>
        <Form.Item name="price" label="Price" rules={[{ required: true, type: 'number' }]} initialValue={data._id ? data.price : ''}>
          <InputNumber />
        </Form.Item>
        <Form.Item name="deliverablesType" label="Deliverables Types" rules={[{ required: true }]} initialValue={data._id ? data.deliverablesType : 'New Site'}>
          <Select
            // placeholder="Select a option and change input text above"
            // allowClear
          >
            <Option value="New Site">New Site</Option>
            <Option value="Upgrade">Upgrade</Option>
            <Option value="Finish">Finish</Option>
          </Select>
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

export default FormOrder;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetch_all_order } from '../store/actions';
import { Table, Space, Button } from 'antd';
import { delete_order, is_create_order } from '../store/actions';

const { Column } = Table;

function CustomerPO() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { orders } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetch_all_order());
  }, [dispatch]);

  function onDelete(id) {
    dispatch(delete_order(id));
  };

  function onUpdate(data) {
    dispatch(is_create_order(true));
    history.push('/update', data);
  };

  return(
    <Table dataSource={orders}>
      <Column title="Customer PO" dataIndex="_id" key="_id" />
      <Column title="Price" dataIndex="price" key="price" />
      <Column title="Deliverables Type" dataIndex="deliverablesType" key="deliverablesType" />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <Button type="primary" onClick={() => onUpdate(record)}>Update</Button>
            <Button danger onClick={() => onDelete(record._id)}>Delete</Button>
          </Space>
        )}
      />
    </Table>
  )
}

export default CustomerPO;
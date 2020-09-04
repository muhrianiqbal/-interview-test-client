import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetch_all_site } from '../store/actions';
import { Table, Space, Button } from 'antd';
import { delete_site } from '../store/actions';

const { Column } = Table;

function Site() {
  const dispatch = useDispatch();
  const { sites } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetch_all_site());
  }, [dispatch]);

  function onDelete(id) {
    dispatch(delete_site(id));
  };
  
  return(
    <Table dataSource={sites}>
      <Column title="Site ID" dataIndex="_id" key="_id" />
      <Column title="Site Name" dataIndex="siteName" key="siteName" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <Button type="primary">Update</Button>
            <Button danger onClick={() => onDelete(record._id)}>Delete</Button>
          </Space>
        )}
      />
    </Table>
  )
}

export default Site;
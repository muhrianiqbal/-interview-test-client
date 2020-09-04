import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetch_all_deliverables } from '../store/actions';
import { Table, Space, Button } from 'antd';
import { delete_deliverables } from '../store/actions';

const { Column } = Table;

function Deliverables() {
  const dispatch = useDispatch();
  const { deliverables } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetch_all_deliverables());
  }, [dispatch]);

  function onDelete(id) {
    dispatch(delete_deliverables(id));
  };

  return(
    <Table dataSource={deliverables}>
      <Column title="Deliverables ID" dataIndex="_id" key="_id" />
      <Column title="Customer PO" dataIndex="customerPO" key="siteName" />
      <Column title="Site ID" dataIndex="siteId" key="address" />
      <Column title="Site name" dataIndex="siteName" key="_id" />
      <Column title="Deliverables Types" dataIndex="deliverablesType" key="siteName" />
      <Column title="Installation Start" dataIndex="installationStart" key="address" />
      <Column title="Installation Finish" dataIndex="installationFinish" key="address" />
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

export default Deliverables;
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { is_show_order, is_show_site, is_show_deliverables } from '../store/actions';
import { is_create_order, is_create_site, is_create_deliverables } from '../store/actions';

const { SubMenu } = Menu;

function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleClick(e) {
    console.log('click ', e);
    switch (e.key) {
      case ("showOrder"):
        dispatch(is_show_order(true));
        history.push('/');
        break;
      case ("showSite"):
        dispatch(is_show_site(true));
        history.push('/');
        break;
      case ("showDeliverables"):
        dispatch(is_show_deliverables(true));
        history.push('/');
        break;
      case ("createCustomerPO"):
        dispatch(is_create_order(true));
        history.push('/add');
        break;
      case ("createSite"):
        dispatch(is_create_site(true));
        history.push('/add');
        break;
      case ("createDeliverables"):
        dispatch(is_create_deliverables(true));
        history.push('/add');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // dispatch(fetch_all_order());
  }, [dispatch]);
  return(
    <Menu onClick={handleClick} mode="horizontal" style={{height: '50px'}}>
        <SubMenu title="Show">
          <Menu.Item key="showOrder">CustomerPO</Menu.Item>
          <Menu.Item key="showSite">Site</Menu.Item>
          <Menu.Item key="showDeliverables">Deliverables</Menu.Item>
        </SubMenu>
        <SubMenu title="Create">
          <Menu.Item key="createCustomerPO">CustomerPO</Menu.Item>
          <Menu.Item key="createSite">Site</Menu.Item>
          <Menu.Item key="createDeliverables">Deliverables</Menu.Item>
        </SubMenu>
      </Menu>
  )
}

export default Navbar;
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FormOrder from '../components/FormOrder';
import FormSite from '../components/FormSite';
import FormDeliverables from '../components/FormDeliverables';

function Update() {
  const location = useLocation();
  const { isCreateOrder, isCreateSite, isCreateDeliverables } = useSelector(state => state);

  return(
    <div style={{width: '100vw', height: '100vh'}}>
      <Navbar />
      <div style={{marginTop: '10vh', display: 'flex', justifyContent: 'center'}}>
        { isCreateOrder ? <FormOrder data={location.state} /> :
          isCreateSite ? <FormSite data={location.state} /> :
          isCreateDeliverables ? <FormDeliverables data={location.state} /> :
          <></>
        }
      </div>
    </div>
  )
}

export default Update;
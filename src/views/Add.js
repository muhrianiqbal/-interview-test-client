import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import FormOrder from '../components/FormOrder';
import FormSite from '../components/FormSite';
import FormDeliverables from '../components/FormDeliverables';

function Add() {
  const { isCreateOrder, isCreateSite, isCreateDeliverables } = useSelector(state => state);

  return(
    <div style={{width: '100vw', height: '100vh'}}>
      <Navbar />
      <div style={{marginTop: '10vh', display: 'flex', justifyContent: 'center'}}>
        { isCreateOrder ? <FormOrder /> :
          isCreateSite ? <FormSite /> :
          isCreateDeliverables ? <FormDeliverables /> :
          <></>
        }
      </div>
    </div>
  )
}

export default Add;
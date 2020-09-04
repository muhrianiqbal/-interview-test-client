import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import CustomerPO from '../components/CustomerPO';
import Site from '../components/Site';
import Deliverables from '../components/Deliverables';

function Home() {
  const { isShowOrder, isShowSite, isShowDeliverables } = useSelector(state => state);

  return(
    <div style={{width: '100vw', height: '100vh'}}>
      <Navbar />
      <div style={{marginTop: '30px', textAlign: 'center'}}>
        { isShowOrder ? <CustomerPO /> :
          isShowSite ? <Site /> :
          isShowDeliverables ? <Deliverables /> :
          <></>
        }
      </div>
    </div>
  )
}

export default Home;
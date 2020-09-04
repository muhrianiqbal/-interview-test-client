import { CREATE_ORDER, FETCH_ALL_ORDER } from '../actions';
import { CREATE_SITE, FETCH_ALL_SITE } from '../actions';
import { CREATE_DELIVERABLES, FETCH_ALL_DELIVERABLES } from '../actions';
import { IS_SHOW_ORDER, IS_SHOW_SITE, IS_SHOW_DELIVERABLES } from '../actions';
import { IS_CREATE_ORDER, IS_CREATE_SITE, IS_CREATE_DELIVERABLES } from '../actions';

const initialState = {
  orders: [],
  sites: [],
  deliverables: [],
  isShowOrder: true,
  isShowSite: false,
  isShowDeliverables: false,
  isCreateOrder: true,
  isCreateSite: false,
  isCreateDeliverables: false
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case (IS_SHOW_ORDER):
      return ({ ...state, isShowOrder: payload, isShowSite: !payload, isShowDeliverables: !payload });
    case (IS_SHOW_SITE):
      return ({ ...state, isShowOrder: !payload, isShowSite: payload, isShowDeliverables: !payload });
    case (IS_SHOW_DELIVERABLES):
      return ({ ...state, isShowOrder: !payload, isShowSite: !payload, isShowDeliverables: payload });
    case (IS_CREATE_ORDER):
      return ({ ...state, isCreateOrder: payload, isCreateSite: !payload, isCreateDeliverables: !payload });
    case (IS_CREATE_SITE):
      return ({ ...state, isCreateOrder: !payload, isCreateSite: payload, isCreateDeliverables: !payload });
    case (IS_CREATE_DELIVERABLES):
      return ({ ...state, isCreateOrder: !payload, isCreateSite: !payload, isCreateDeliverables: payload });
    case (CREATE_ORDER):
      state.orders.push(payload);
      return state;
    case (FETCH_ALL_ORDER):
      return ({ ...state, orders: payload });
    case (CREATE_SITE):
      state.sites.push(payload);
      return state;
    case (FETCH_ALL_SITE):
      return ({ ...state, sites: payload });
    case (CREATE_DELIVERABLES):
      state.deliverables.push(payload);
      return state;
    case (FETCH_ALL_DELIVERABLES):
      return ({ ...state, deliverables: payload });
    default:
      return state;
  }
}

export default reducer;
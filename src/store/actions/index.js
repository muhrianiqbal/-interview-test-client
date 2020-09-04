import axios from 'axios';
const baseURL = 'http://localhost:3000';

//Show
export const IS_SHOW_ORDER = 'IS_SHOW_ORDER';
export const IS_SHOW_SITE = 'IS_SHOW_SITE';
export const IS_SHOW_DELIVERABLES = 'IS_SHOW_DELIVERABLES';

//Create
export const IS_CREATE_ORDER = 'IS_CREATE_ORDER';
export const IS_CREATE_SITE = 'IS_CREATE_SITE';
export const IS_CREATE_DELIVERABLES = 'IS_CREATE_DELIVERABLES';

//CustomerPO
export const CREATE_ORDER = 'CREATE_ORDER';
export const FETCH_ALL_ORDER = 'FETCH_ALL_ORDER';
export const FETCH_ONE_ORDER = 'FETCH_ONE_ORDER';
// export const UPDATE_ORDER = 'UPDATE_ORDER';
// export const DELETE_ORDER = 'DELETE_ORDER';

//Site
export const CREATE_SITE = 'CREATE_SITE';
export const FETCH_ALL_SITE = 'FETCH_ALL_SITE';
export const FETCH_ONE_SITE = 'FETCH_ONE_SITE';
// export const UPDATE_SITE = 'UPDATE_SITE';
// export const DELETE_SITE = 'DELETE_SITE';

//Deliverables
export const CREATE_DELIVERABLES = 'CREATE_DELIVERABLES';
export const FETCH_ALL_DELIVERABLES = 'FETCH_ALL_DELIVERABLES';
export const FETCH_ONE_DELIVERABLES = 'FETCH_ONE_DELIVERABLES';
// export const UPDATE_DELIVERABLES = 'UPDATE_DELIVERABLES';
// export const DELETE_DELIVERABLES = 'DELETE_DELIVERABLES';

//Show
export const is_show_order = (payload)  => {
  return ({ type: IS_SHOW_ORDER, payload });
}
export const is_show_site = (payload)  => {
  return ({ type: IS_SHOW_SITE, payload });
}
export const is_show_deliverables = (payload)  => {
  return ({ type: IS_SHOW_DELIVERABLES, payload });
}

//Create
export const is_create_order = (payload)  => {
  return ({ type: IS_CREATE_ORDER, payload });
}
export const is_create_site = (payload)  => {
  return ({ type: IS_CREATE_SITE, payload });
}
export const is_create_deliverables = (payload)  => {
  return ({ type: IS_CREATE_DELIVERABLES, payload });
}

//CustomerPO
export const create_order = (data) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: baseURL,
      data
    })
      .then(({data}) => {
        return dispatch(fetch_all_order());
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export const fetch_all_order = () => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: baseURL
    })
      .then(({data}) => {
        return dispatch({ type: FETCH_ALL_ORDER, payload: data });
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export const fetch_one_order = (id) => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: baseURL + `/${id}`
    })
      .then(({data}) => {
        return dispatch({ type: FETCH_ONE_ORDER, payload: data });
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export const update_order = (id, data) => {
  return (dispatch) => {
    axios({
      method: 'put',
      url: baseURL + `/${id}`,
      data
    })
      .then(({data}) => {
        return dispatch(fetch_all_order);
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export const delete_order = (id) => {
  return (dispatch) => {
    axios({
      method: 'delete',
      url: baseURL + `/${id}`
    })
      .then(({data}) => {
        return dispatch(fetch_all_order());
      })
      .catch(error => {
        console.log(error);
      })
  }
}

//Site
export const create_site = (data) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: baseURL + '/site',
      data
    })
      .then(({data}) => {
        return dispatch(fetch_all_site());
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export const fetch_all_site = () => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: baseURL + '/site'
    })
      .then(({data}) => {
        return dispatch({ type: FETCH_ALL_SITE, payload: data });
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export const fetch_one_site = (id) => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: `${baseURL}/site/${id}`
    })
      .then(({data}) => {
        return dispatch({ type: FETCH_ONE_SITE, payload: data });
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export const update_site = (id, data) => {
  return (dispatch) => {
    axios({
      method: 'put',
      url: `${baseURL}/site/${id}`,
      data
    })
      .then(({data}) => {
        return dispatch(fetch_all_site);
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export const delete_site = (id) => {
  return (dispatch) => {
    axios({
      method: 'delete',
      url: `${baseURL}/site/${id}`
    })
      .then(({data}) => {
        return dispatch(fetch_all_site());
      })
      .catch(error => {
        console.log(error);
      })
  }
}

//Deliverables
export const create_deliverables = (data) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: baseURL + '/deliverables',
      data
    })
      .then(({data}) => {
        return dispatch(fetch_all_deliverables());
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export const fetch_all_deliverables = () => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: baseURL + '/deliverables'
    })
      .then(({data}) => {
        return dispatch({ type: FETCH_ALL_DELIVERABLES, payload: data });
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export const fetch_one_deliverables = (id) => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: `${baseURL}/deliverables/${id}`
    })
      .then(({data}) => {
        return dispatch({ type: FETCH_ONE_DELIVERABLES, payload: data });
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export const update_deliverables = (id, data) => {
  return (dispatch) => {
    axios({
      method: 'put',
      url: `${baseURL}/deliverables/${id}`,
      data
    })
      .then(({data}) => {
        return dispatch(fetch_all_deliverables);
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export const delete_deliverables = (id) => {
  return (dispatch) => {
    axios({
      method: 'delete',
      url: `${baseURL}/deliverables/${id}`
    })
      .then(({data}) => {
        return dispatch(fetch_all_deliverables());
      })
      .catch(error => {
        console.log(error);
      })
  }
} 
import axios from 'axios'
import {
  message
} from 'antd';
import store from '../../store';
import {
  PUSH_LOADING,
  SHIFT_LOADING,
  actions
} from '../../store/actions/load-action'

axios.defaults.timeout = 10000
axios.interceptors.request.use(
  (config) => {
    store.dispatch(actions.showLoading())
    config.headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Requested-With': 'XMLHttpRequest'
    }
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
      config.headers['token'] =localStorage.getItem('token')
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  (response) => {
    store.dispatch(actions.shiftLoading())
    if (response.data && response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },

  (error) => {
    store.dispatch(actions.shiftLoading())
    if (error.response.status) {
      switch (error.response.status) {
        case 401:

          break
        case 403:
          message.error('403')
          localStorage.removeItem('token')
          setTimeout(() => {

          }, 1000)
          break
        case 404:
          message.error('404')
          break
        case 504:
          message.error('504')
          break
          // 其他错误，直接抛出错误提示
        default:
          message.error(error.response.statusText)
      }
      return Promise.reject(error.response)
    }
  }

)

/**
 * get
 * @param url
 * @param params
 * @returns {Promise<unknown>}
 * @private
 */
export const _get = (url, params) => {
  return new Promise((rlv, rej) => {
    axios
      .get(url, {
        params: params
      })
      .then((res) => {
        rlv(res)
      })
      .catch((err) => {
        rej(err)
      })
  })
}

/**
 * post
 * @param url
 * @param params
 * @returns {Promise<unknown>}
 * @private
 */
export const _post = (url, params) => {
  return new Promise((rlv, rej) => {
    axios
      .post(url, params, {})
      .then((res) => {
        console.log('Success', res)
        rlv(res.data)
      })
      .catch((err) => {
        console.log('Error', err);
        rej(err.data)
      })
  })
}



export const download = (url, data, title) => {
  return axios({
    method: 'post',
    url: url,
    data: data,
    responseType: 'blob'
  }).then(res => {
    let result = res.data
    var blob = new Blob([result], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    })
    var objectUrl = URL.createObjectURL(blob)
    var a = document.createElement('a')
    document.body.appendChild(a)
    a.setAttribute('style', 'display:none')
    a.setAttribute('href', objectUrl)
    a.setAttribute('download', title + '.xls')
    a.click()
    URL.revokeObjectURL(objectUrl)
  })
}
import Axios from 'axios'
import Qs from 'qs'

const getRequestFactory = (url, type, data) => {
  return Axios({
    url: url,
    params: data || null, 
    headers: type ? {'X-User-Token': '08fd81c956db48f0a4ca29ccc6b5b883'} : null
  }).then(res => {
    return res.data
  })
}
const postRequestFactory = (url, type, data) => {
  return Axios({
    url: url,
    method: 'post',
    data: Qs.stringify(data) || null, 
    headers: type ? {'X-User-Token': '08fd81c956db48f0a4ca29ccc6b5b883'} : null
  }).then(res => {
    return res.data
  })
}

export default {
  get: getRequestFactory,
  post: postRequestFactory
}
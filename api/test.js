import ajax from './myAxios'

const testUrl = '/srv/teachPlatform/subject/getJdList'

const test = data => ajax.post(testUrl, true, data)

export {
  test
}
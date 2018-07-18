import request from '../utils/request';

export function query() {
  return request('/app/user/profile');
}

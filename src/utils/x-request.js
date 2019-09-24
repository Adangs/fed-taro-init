import Taro from '@tarojs/taro';
import config from '../config';

export default (options = {}) => {
  options = Object.assign({ method: 'GET', data: {} }, options)
  console.log(options)
  if (config.LOG) {
    console.info(`${new Date().toLocaleString()}【 API=${config.API + options.url} 】DATA=${JSON.stringify(options.data)}`);
  }
  return Taro.request({
    url: config.API + options.url,
    data: options.data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: options.method.toUpperCase(),
  }).then((res) => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (config.LOG) {
        console.info(`${new Date().toLocaleString()}【 API=${config.API + options.url} 】【接口响应：】`,res.data);
      }
      if (data.error_code !== 0) {
        Taro.showToast({
          title: `${data.error_msg}~` || data.error_code,
          icon: 'none',
          mask: true,
        });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  })
}

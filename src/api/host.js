// 配置多个服务的域名
export const domainFun = () => {
  let personCenter, settingCenter
  if (process.env.NODE_ENV === 'development') {
    personCenter = '1111'
    settingCenter = '1111'
  } else if (process.env.NODE_ENV === 'test') {
    personCenter = '2222'
    settingCenter = '2222'
  } else {
    personCenter = '3333'
    settingCenter = '3333'
  }
  return {
    personCenter,
    settingCenter
  }
}

import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/photo/index',
      'pages/other/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#34A84C',
      list: [{
        pagePath: 'pages/index/index',
        text: '首页精选',
        iconPath: 'images/home.png',
        selectedIconPath: 'images/homeAct.png'
      }, {
        pagePath: 'pages/photo/index',
        text: '精彩图集',
        iconPath: 'images/atlas.png',
        selectedIconPath: 'images/atlasAct.png'
      }, {
        pagePath: 'pages/other/index',
        text: '别人的世界',
        iconPath: 'images/other.png',
        selectedIconPath: 'images/otherAct.png'
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

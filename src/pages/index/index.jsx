import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import XRequset from '../../utils/x-request'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '我的世界盒子'
  }

  componentWillMount () { }

  componentDidMount () {
    XRequset({
      url: '/mc/home/index'
    }).then(res => {
      console.log(res)
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>Hello world!</View>
    )
  }
}

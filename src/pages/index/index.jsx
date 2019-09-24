import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import XRequset from '../../utils/x-request'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
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
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton type='primary'>按钮文案</AtButton>
      </View>
    )
  }
}

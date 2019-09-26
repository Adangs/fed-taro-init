import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import XRequest from '@/src/utils/XRequest'
import './index.less'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '我的世界盒子'
  }

  state = {
    banner: [],
    list: []
  }

  componentWillMount () { }

  componentDidMount () {
    XRequest({
      url: '/mc/home/index'
    }).then(res => {
      this.setState({
        banner: res.banner_list,
        list: res.list
      })
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { banner } = this.state
    // 轮播图
    const BannerList = banner.map(item => {
      return (
        <SwiperItem key={item.s_id}>
          <Image mode='widthFix' src={item.img_url} />
        </SwiperItem>
      )
    })
    // 列表
    const NewsList = list.map(item => {
      return (
        <View key={item.s_id} className='m-news-item'>
          <View className='photo'>
            <Image mode='widthFix' src={item.cover} />
          </View>
          <View className="info">
            <View className="title">{item.title}</View>
            <View className="desc">
              <View className="time">{item.ctime}更新</View>
              <View className="pv">{item.view_cnt}阅读</View>
            </View>
          </View>
        </View>
      )
    })

    return (
      <View className='g-page'>
        <Swiper className='m-home-swiper' circular indicatorDots indicatorColor='rgba(255,255,255,.5)' indicatorActiveColor='rgba(255,255,255,.8)'>
          {BannerList}
        </Swiper>
        <View className="m-home-list">
          {NewsList}
        </View>
      </View>
    )
  }
}

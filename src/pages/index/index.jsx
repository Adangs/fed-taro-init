import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import XNewsItem from '@/src/components/XNewsItem'
import XRequest from '@/src/utils/XRequest'
import './index.less'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '我的世界盒子'
  }

  state = {
    pn: 1,
    banner: [],
    list: []
  }

  componentWillMount () { }

  componentDidMount () {
    XRequest({
      url: '/mc/home/index'
    }).then(res => {
      const pn = this.state.pn + 1
      this.setState({
        pn,
        banner: res.banner_list,
        list: res.list
      })
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onReachBottom () {
    const { pn } = this.state
    XRequest({
      url: '/mc/home/index',
      data: {
        pn
      }
    }).then(res => {
      const { list } = this.state
      this.setState({
        pn: pn + 1,
        list: [
          ...list,
          ...res.list
        ]
      })
    })
  }

  render () {
    const { banner, list } = this.state
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
        <View className="li" key={item.c_id}>
          <XNewsItem data={item} />
        </View>
      )
    })

    return (
      <View className='g-page'>
        <Swiper className='m-home-swiper' autoplay circular indicatorDots indicatorColor='rgba(255,255,255,.5)' indicatorActiveColor='rgba(255,255,255,.8)'>
          {BannerList}
        </Swiper>
        <View className="m-home-list">
          {NewsList}
        </View>
      </View>
    )
  }
}

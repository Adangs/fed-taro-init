import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  formatNumber = (s = 0) => { //转换数据
    s = Number(s)
    let n = 2,
      unit = ''
    if (!s || s <= 0) {
      return '0'
    }
    switch (true) {
      case s < 10000:
        s = (parseInt(s)).toFixed(2) //将分转化为带一位小数的
        n = 1
        unit = ''
        break;

      case s >= 10000 && s < 100000000:
        s = (parseInt(s) / 10000).toFixed(2) //将分转化为带一位小数的万
        n = 1;
        unit = '万'
        break;

      case s >= 100000000:
        s = (parseInt(s) / 100000000).toFixed(2) //将分转化为带一位小数的亿
        n = 1;
        unit = '亿'
        break;

      default:
        return '--.--'
    }
    n = n > 0 && (n <= 20 ? n : 0)
    s = parseFloat((s + '')
      .replace(/[^\d\.-]/g, ''))
      .toFixed(n) + ''
    let l = s.split('.')[0].split('').reverse()
    let r = s.split('.')[1]
    let t = ''
    for (let i = 0, p = l.length; i < p; i++) {
      t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
    }
    if (r !== '0') {
      return t.split('').reverse().join('') + '.' + r + unit
    } else {
      return t.split('').reverse().join('') + unit
    }
  }

  formatDate = (time) => {
    // 将返回的时间戳改为8.17形式
    const date = new Date(parseInt(time) * 1000)
    return date.getMonth() + 1 + '.' + date.getDate()
  }

  render () {
    const { data = {} } = this.props
    return (
      <View className='x-news-item'>
        <View className="pic">
          <Image mode='aspectFill' src={data.images[0]} />
        </View>
        <View className="info">
          <View className="title">{data.title}</View>
          <View className="desc">
            <View className="time">{this.formatDate(data.ctime)}更新</View>
            <View className="view">{this.formatNumber(data.view_cnt)}阅读</View>
          </View>
        </View>
      </View>
    )
  }
}

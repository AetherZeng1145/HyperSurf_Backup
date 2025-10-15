import router from '@system.router'
import storage from '@system.storage'

export default {
  data: {
    currentEngine: 'Baidu'
  },

  onInit() {
    this.loadCurrentEngine()
  },

  onShow() {
    // 每次页面显示时重新加载当前搜索引擎
    this.loadCurrentEngine()
  },

  loadCurrentEngine() {
    storage.get({
      key: 'selected_engine',
      success: (data) => {
        if (data) {
          this.currentEngine = data
        }
      },
      fail: () => {
        // 使用默认值
        this.currentEngine = 'Baidu'
      }
    })
  },

  getCurrentEngineName() {
    switch(this.currentEngine) {
      case 'Baidu':
        return '百度'
      case 'Bing':
        return '必应'
      case 'Google':
        return '谷歌'
      case 'Sogou':
        return '搜狗'
      default:
        return '百度'
    }
  },

  goBack() {
    router.back()
  },

  goToEngine() {
    router.push({
      uri: 'pages/settings/engine'
    })
  },

  goToAbout() {
    router.push({
      uri: 'pages/settings/about'
    })
  },

  goToDonate() {
    router.push({
      uri: 'pages/settings/donate'
    })
  }
}
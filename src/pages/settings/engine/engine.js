import router from '@system.router'
import storage from '@system.storage'

export default {
  data: {
    currentEngine: 'Baidu'
  },

  onInit() {
    this.loadSelectedEngine()
  },

  onReady() {
    // 页面就绪
  },

  loadSelectedEngine() {
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

  selectEngine(engine) {
    this.currentEngine = engine
    this.saveSelectedEngine(engine)
  },

  saveSelectedEngine(engine) {
    storage.set({
      key: 'selected_engine',
      value: engine,
      success: () => {
        console.log('搜索引擎已保存:', engine)
      },
      fail: (error) => {
        console.error('保存失败:', error)
      }
    })
  },

  getEngineName(engine) {
    switch(engine) {
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
  }
}
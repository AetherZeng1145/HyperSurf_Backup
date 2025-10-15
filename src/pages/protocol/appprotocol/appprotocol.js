import router from '@system.router'

export default {
  data: {
    currentYear: '2025',
    currentMonth: '10'
  },

  onInit() {
    // 页面初始化
    this.getCurrentDate()
  },

  onReady() {
    // 页面就绪
  },

  onShow() {
    // 页面显示
  },

  onHide() {
    // 页面隐藏
  },

  getCurrentDate() {
    // 动态获取当前日期
    const now = new Date()
    this.currentYear = now.getFullYear().toString()
    this.currentMonth = (now.getMonth() + 1).toString()
  },

  goBack() {
    // 返回到welcome界面
    router.back()
  }
}
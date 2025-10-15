import router from '@system.router';

export default {
  data: {
    // 协议页面不需要特殊数据
  },

  onInit() {
    // 页面初始化
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

  /**
   * 新增：返回事件处理函数
   * 当用户在 zendes.ux 页面点击带有 onclick="goBack" 的元素时，此函数将被调用。
   */
  goBack() {
    router.back({
      uri: 'pages/welcome' // 跳转到欢迎页面的路径
    });
  }
}

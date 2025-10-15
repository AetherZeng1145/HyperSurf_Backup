// 文件路径: src/pages/welcome/welcome.js (基于您的原始代码进行优化)
import router from '@system.router'
import storage from '@system.storage'

export default {
  data: {
    currentStep: 0,
    agreed: false
  },

  onInit() {
    // 您的调试逻辑保持不变
    // this.checkWelcomeStatus()
  },

  checkWelcomeStatus() {
    storage.get({
      key: 'welcome_completed',
      success: (data) => {
        if (data === '1') {
          router.replace({
            // 修正了路径中的斜杠
            uri: 'pages/homeindex' 
          })
        }
      }
    })
  },

  handleNextStep(e) {
    // 您的事件处理逻辑保持不变
    if (e && e.stop) {
      e.stop()
    }
    
    // 关键修改：协议步骤的索引从 3 改为 2
    if (this.currentStep === 2 && !this.agreed) {
      return
    }

    // 关键修改：总步骤数从 5 减少到 4 (因为索引是 0, 1, 2, 3, 4)
    if (this.currentStep < 4) {
      this.currentStep++
    }
  },

  toggleAgreement(e) {
    e.stop = true
    this.agreed = !this.agreed
  },

  openAppProtocol(e) {
    e.stop = true
    router.push({
      // 修正了路径中的斜杠
      uri: 'pages/protocol/appprotocol' 
    })
  },

  openZendesProtocol(e) {
    e.stop = true
    router.push({
      // 修正了路径中的斜杠
      uri: 'pages/protocol/zendes' 
    })
  },

  startUsing() {
    // 您的调试逻辑保持不变
    router.replace({
      // 修正了路径中的斜杠
      uri: 'pages/homeindex' 
    })
    
    // 您的正式版代码保持不变
    // storage.set({
    //   key: 'welcome_completed',
    //   value: '1',
    //   success: () => {
    //     router.replace({
    //       uri: 'pages/homeindex'
    //     })
    //   },
    //   fail: (data, code) => {
    //     console.error(`存储失败: ${code}`)
    //     router.replace({
    //       uri: 'pages/home/index'
    //     })
    //   }
    // })
  }
}

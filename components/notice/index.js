import newInstance from '../message/instance'

let noticeInstance;

let Notice = {
  name: 'Notice',
  open(options = {}) {
    options = Object.assign({ type: 'default' }, options)
    options.noticeType = 'notice'
    if (!messageInstance) {
      messageInstance = newInstance({ type: 'notice' })
    }
    messageInstance.show(options);
  },
  destroy() {
    if (noticeInstance) {
      noticeInstance.destroy()
      noticeInstance = null;
      document.body.removeChild(document.querySelector('.k-notice'));
    }
  }
};

['info', 'success', 'warning', 'error'].forEach(type => {
  Notice[type] = (options) => {
    return Notice.open({ type, ...options })
  }
});

export default Notice;
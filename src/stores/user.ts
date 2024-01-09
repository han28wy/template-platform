import { defineStore } from 'pinia';
import { getStorage, setStorage } from '@/utils/storage';

export const userStore = defineStore('user', {
  state: () => {
    return {
      token: getStorage('token'),
      userInfo: getStorage('userInfo')
    };
  },
  actions: {
    setUserInfo(data: any) {
      this.token = data.token;
      this.userInfo = data.userInfo;
      setStorage('token', data.token);
      setStorage('userInfo', data.userInfo);
    },
    // 登录
    login() {
      return new Promise(resolve => {
        this.setUserInfo({
          token: 'asdfasdfa',
          userInfo: { name: '张三', age: 18 }
        });
        resolve(true);
      });
    },
    // 退出登录
    logout() {
      this.token = null;
      this.userInfo = null;
      setStorage('token', '');
      setStorage('userInfo', {});
    }
  }
});

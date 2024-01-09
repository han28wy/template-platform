import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
import { ElLoading } from 'element-plus';
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading';
import { userStore } from '@/stores/user';
// import vm from "@/main";

let loadingInstance: LoadingInstance | null = null;
let requestNum = 0;

const addLoading = () => {
  // 增加loading 如果pending请求数量等于1，弹出loading, 防止重复弹出
  requestNum++;
  if (requestNum == 1) {
    loadingInstance = ElLoading.service({
      text: '正在努力加载中....',
      background: 'rgba(0, 0, 0, 0)'
    });
  }
};

const cancelLoading = () => {
  // 取消loading 如果pending请求数量等于0，关闭loading
  requestNum--;
  if (requestNum === 0) loadingInstance?.close();
};

export const createAxiosByinterceptors = (
  config?: AxiosRequestConfig
): AxiosInstance => {
  const instance = axios.create({
    timeout: 1000, //超时配置
    withCredentials: true, //跨域携带cookie
    ...config // 自定义配置覆盖基本配置
  });

  // 添加请求拦截器
  instance.interceptors.request.use(
    function (config: any) {
      // 在发送请求之前做些什么
      const { loading = true } = config;
      console.log('config:', config);
      config.headers.Authorization = userStore().token;
      if (loading) addLoading();
      return config;
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器
  instance.interceptors.response.use(
    function (response) {
      // 对响应数据做点什么
      console.log('response:', response);
      const { loading = true } = response.config;
      if (loading) cancelLoading();
      const { code, data, message } = response.data;
      if (code === 200) return data;
      else if (code === 301) {
        userStore().logout();
      } else {
        ElMessage.error(message);
        return Promise.reject(response.data);
      }
    },
    function (error) {
      // 对响应错误做点什么
      console.log('error-response:', error.response);
      console.log('error-config:', error.config);
      console.log('error-request:', error.request);
      const { loading = true } = error.config;
      if (loading) cancelLoading();
      if (error.response) {
        if (error.response.status === 301) {
          userStore().logout();
        }
      }
      ElMessage.error(error?.response?.data?.message || '服务端异常');
      return Promise.reject(error);
    }
  );
  return instance;
};

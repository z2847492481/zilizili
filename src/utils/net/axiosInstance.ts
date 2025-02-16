import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 确保 headers 存在且为对象
    config.headers = config.headers || {}

    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: any) => {
    if (error.response && error.response.status === 401) {
      // 处理未授权错误，例如跳转到登录页
      console.log('未授权，请登录')
    }
    return Promise.reject(error)
  },
)

export default axiosInstance

import axiosInstance from '@/utils/net/axiosInstance'
import { type AxiosResponse } from 'axios'
interface Video {
  id: number
}

// 封装获取用户信息的API请求函数
export const getVideoById = async (videoId: number): Promise<AxiosResponse<Video>> => {
  const response = await axiosInstance.get<Video>(`/video/getVideoInfoById/${videoId}`)
  return response
}

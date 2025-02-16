/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_BASEURL: string
  readonly VITE_APP_TITLE: string
  // 根据需要添加更多变量
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

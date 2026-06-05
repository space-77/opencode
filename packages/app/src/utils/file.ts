// 下载文件
export function downloadFile(url: string, fileName: string) {
  const a = document.createElement('a')
  a.href = url
  a.target = '_blank'
  a.download = fileName
  a.click()
}

// 下载文件流
export function downloadFileStream(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob)
  downloadFile(url, fileName)
}

export function minioUrlFormat(url: string): string {
  return url
}

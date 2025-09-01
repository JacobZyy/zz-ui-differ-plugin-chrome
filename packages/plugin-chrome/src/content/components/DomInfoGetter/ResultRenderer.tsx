import type { DiffResultInfo } from '@ui-differ/core'
import { useRequest } from 'ahooks'
import { Spin } from 'antd'
import useFabric from '@/hooks/useFabirc'

const canvasId = 'result-canvas'
interface ResultRendererProps {
  diffResultInfo: DiffResultInfo[]
  screenShotHeight: number
  screenShotWidth: number
  screenShot: string
  onFinishResult: (resultImage?: string) => void
}

export default function ResultRenderer({ diffResultInfo, screenShotHeight, screenShotWidth, screenShot, onFinishResult }: ResultRendererProps) {
  const fabricHandler = useFabric({
    canvasId,
    diffResultInfo,
    imageCount: Math.min(diffResultInfo.length, 4),
    screenShot,
    screenShotHeight,
    screenShotWidth,
  })

  const handleGetRenderResult = async () => {
    if (!fabricHandler || !screenShot)
      return
    await fabricHandler.onInitCanvas()
    const resultImage = await fabricHandler.handleGenerateImages()
    console.log('🚀 ~ handleGetRenderResult ~ resultImage:', resultImage)
    return resultImage
  }

  const request = useRequest(handleGetRenderResult, {
    onSuccess: (resultImage) => {
      onFinishResult(resultImage)
    },
  })

  return (
    <Spin spinning={request.loading}>
      <canvas id={canvasId} />
    </Spin>
  )
}

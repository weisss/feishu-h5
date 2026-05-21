import { useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft, Share2 } from 'lucide-react'
import { knowledgeData, findNodeById } from '../data/mockData'

export default function ManualDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const node = findNodeById(knowledgeData, id || '')

  if (!node || node.type !== 'manual') {
    return (
      <div className="min-h-dvh bg-bg flex flex-col items-center justify-center px-4">
        <div className="text-text-secondary mb-4">说明书不存在</div>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-primary text-white rounded-xl text-sm"
        >
          返回首页
        </button>
      </div>
    )
  }

  // 移除标题中的【说明书】前缀用于显示
  const displayName = node.name.replace(/^【说明书】/, '')

  return (
    <div className="h-dvh bg-bg flex flex-col">
      {/* Header */}
      <div className="shrink-0 bg-surface px-4 py-3 flex items-center gap-3 shadow-sm z-10">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 flex items-center justify-center rounded-lg active:bg-bg transition shrink-0"
        >
          <ChevronLeft className="w-5 h-5 text-text" />
        </button>
        <h1 className="text-base font-semibold text-text truncate flex-1">{displayName}</h1>
        <button
          onClick={() => {
            const shareUrl = window.location.href
            if (navigator.share) {
              navigator.share({
                title: displayName,
                url: shareUrl,
              }).catch(() => {})
            } else {
              // fallback: copy to clipboard
              navigator.clipboard.writeText(shareUrl).catch(() => {})
            }
          }}
          className="w-9 h-9 flex items-center justify-center rounded-lg active:bg-bg transition shrink-0"
        >
          <Share2 className="w-4 h-4 text-text-secondary" />
        </button>
      </div>

      {/* Iframe */}
      <div className="flex-1 bg-white overflow-hidden relative">
        {node.url ? (
          <div className="w-full h-full overflow-hidden">
            <iframe
              src={node.url}
              title={node.name}
              sandbox="allow-scripts allow-same-origin allow-popups"
              className="w-full"
              style={{ height: 'calc(100% + 65px)', marginTop: '-65px', border: 'none' }}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-text-secondary text-sm">
            暂无文档链接
          </div>
        )}
      </div>
    </div>
  )
}

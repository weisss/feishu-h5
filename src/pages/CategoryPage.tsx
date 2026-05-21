import { useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight, FolderOpen, FileText } from 'lucide-react'
import { knowledgeData, findNodeById } from '../data/mockData'

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const node = findNodeById(knowledgeData, id || '')

  if (!node) {
    return (
      <div className="min-h-dvh bg-bg flex flex-col items-center justify-center px-4">
        <div className="text-text-secondary mb-4">分类不存在</div>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-primary text-white rounded-xl text-sm"
        >
          返回首页
        </button>
      </div>
    )
  }

  const childCategories = node.children?.filter((c) => c.type === 'category') || []
  const childManuals = node.children?.filter((c) => c.type === 'manual') || []

  return (
    <div className="min-h-dvh bg-bg">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-surface px-4 py-3 flex items-center gap-3 shadow-sm">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 flex items-center justify-center rounded-lg active:bg-bg transition"
        >
          <ChevronLeft className="w-5 h-5 text-text" />
        </button>
        <h1 className="text-base font-semibold text-text truncate">{node.name}</h1>
      </div>

      {/* Sub Categories */}
      {childCategories.length > 0 && (
        <div className="px-4 pt-4">
          <div className="text-xs text-text-secondary mb-2">选择分类</div>
          <div className="flex flex-col gap-2">
            {childCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/category/${cat.id}`)}
                className="flex items-center gap-3 p-3 bg-surface rounded-xl text-left active:scale-[0.98] transition shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center text-primary shrink-0">
                  <FolderOpen className="w-4 h-4" />
                </div>
                <span className="text-sm text-text flex-1 truncate">{cat.name}</span>
                <ChevronRight className="w-4 h-4 text-text-secondary shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Manuals List */}
      {childManuals.length > 0 && (
        <div className={`px-4 ${childCategories.length > 0 ? 'pt-4 pb-4' : 'pt-4 pb-4'}`}>
          <div className="text-xs text-text-secondary mb-2">说明书</div>
          <div className="flex flex-col gap-2">
            {childManuals.map((manual) => (
              <button
                key={manual.id}
                onClick={() => navigate(`/manual/${manual.id}`)}
                className="flex items-center gap-3 p-3 bg-surface rounded-xl text-left active:scale-[0.98] transition shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center text-primary shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-sm text-text flex-1 truncate">{manual.name}</span>
                <ChevronRight className="w-4 h-4 text-text-secondary shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {childCategories.length === 0 && childManuals.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-text-secondary text-sm">
          <FolderOpen className="w-10 h-10 mb-3 opacity-40" />
          暂无内容
        </div>
      )}
    </div>
  )
}
